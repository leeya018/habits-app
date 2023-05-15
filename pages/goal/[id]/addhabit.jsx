import * as ACTION from "actions";
import * as API from "lib/api";

import Button from "components/habits/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AllHabits from "components/habits/allhabits";
import HabitHandle from "components/habits/HabitHandle";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const goal = await API.getGoal(id);
  console.log("getGoal done " + id);
  console.log({ goal });
  console.log("getGoal wireded " + id);
  return {
    props: { goal }, // will be passed to the page component as props
  };
}
export default function AddHabit({ goal }) {
  const router = useRouter();
  const dispatch = useDispatch();
  //   const { chosenGoal } = useSelector((state) => state.habits);

  const [habit, setHabit] = useState({
    name: "",
    description: "",
    amount: "",
    goal: goal.name,
  });

  const updateHabit = ({ name, value }) => {
    dispatch(ACTION.updateError());

    setHabit((prev) => ({ ...prev, [name]: value }));
  };

  const addNewHabit = () => {
    if (checkValidation()) {
      const newHabit = {
        ...habit,
        id: uuidv4(),
        goal: goal.name,
        createdAt: new Date().toISOString(),
        traces: [],
      };
      console.log({ newHabit });
      dispatch(ACTION.addHabit(newHabit));
      setHabit({ name: "", description: "", amount: "", goal: goal.name });
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
        goal={goal.name}
        onClick={addNewHabit}
        updateHabit={updateHabit}
        habit={habit}
        title={"ADD HABIT"}
      />
      <AllHabits goal={goal} />
    </div>
  );
}
