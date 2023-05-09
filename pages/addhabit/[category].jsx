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
  const { category } = context.query;
  return {
    props: { category }, // will be passed to the page component as props
  };
}
export default function AddHabit({ category }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [habit, setHabit] = useState({
    name: "",
    description: "",
    amount: "",
    mainGoal: "",
    category,
  });

  useEffect(() => {
    dispatch(ACTION.updateChosenCategory(category));
  }, [category]);

  const updateHabit = ({ name, value }) => {
    dispatch(ACTION.updateError());

    setHabit((prev) => ({ ...prev, [name]: value }));
  };

  const addNewHabit = () => {
    if (checkValidation()) {
      const newHabit = {
        ...habit,
        category,
        createdAt: new Date().toDateString(),
        traces: [],
      };
      console.log({ newHabit });
      dispatch(ACTION.addHabit(newHabit));
      setHabit({ name: "", description: "", amount: "", mainGoal: "" });
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
        color="bg-gray-500"
        onClick={() => {
          router.back();
        }}
      >
        go back
      </Button>
      <HabitHandle
        category={category}
        onClick={addNewHabit}
        updateHabit={updateHabit}
        habit={habit}
        title={"ADD HABIT"}
      />
      <AllHabits category={category} />
    </div>
  );
}
