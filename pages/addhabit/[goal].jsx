import * as ACTION from "actions";
import Button from "components/habits/Button";
import Input from "components/habits/Input";
import Title from "components/habits/Title";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Error from "components/habits/Error";
import { useEffect } from "react";
import AllHabits from "components/habits/allhabits";
import HabitHandle from "components/habits/HabitHandle";

export async function getServerSideProps(context) {
  const { goal } = context.query;
  return {
    props: { goal }, // will be passed to the page component as props
  };
}
export default function AddHabit({ goal }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [habit, setHabit] = useState({
    name: "",
    description: "",
    amount: "",
    goal,
  });

  useEffect(() => {
    dispatch(ACTION.updateChosenGoal(goal));
  }, [goal]);

  const updateHabit = ({ name, value }) => {
    dispatch(ACTION.updateError());

    setHabit((prev) => ({ ...prev, [name]: value }));
  };

  const addNewHabit = () => {
    if (checkValidation()) {
      const newHabit = {
        ...habit,
        goal,
        createdAt: new Date().toISOString(),
        traces: [],
      };
      console.log({ newHabit });
      dispatch(ACTION.addHabit(newHabit));
      setHabit({ name: "", description: "", amount: "", goal: "" });
    } else {
      dispatch(ACTION.updateError("one of the fields is not set"));
    }
  };

  const checkValidation = () => {
    let keysLeft = Object.keys(habit).filter((key) => habit[key] === "");
    console.log(keysLeft);
    const isAllSet = keysLeft.length === 0;

    return isAllSet;
  };

  return (
    <div>
      <Button
        position="absolute top-1 left-1"
        color="bg-gray_dark"
        onClick={() => {
          router.back();
        }}
      >
        go back
      </Button>
      <HabitHandle
        goal={goal}
        onClick={addNewHabit}
        updateHabit={updateHabit}
        habit={habit}
        title={"ADD HABIT"}
      />
      <AllHabits goal={goal} />
    </div>
  );
}
