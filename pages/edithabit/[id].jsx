import * as Action from "actions";
import axios from "axios";
import Button from "components/habits/Button";
import HabitHandle from "components/habits/HabitHandle";
import Input from "components/habits/Input";
import Title from "components/habits/Title";
import * as API from "lib/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const habitItem = await API.getHabit(id);
  return {
    props: { habitItem }, // will be passed to the page component as props
  };
}

export default function Edit({ habitItem }) {
  // const router = useRouter();
  const [habit, setHabit] = useState(habitItem);
  console.log({ habitItem });
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Action.updateChosenGoal(habit.goal));
  }, [habit.goal]);

  const updateHabit = ({ name, value }) => {
    dispatch(Action.updateError());

    setHabit((prev) => ({ ...prev, [name]: value }));
  };

  const editHabitHandle = async () => {
    if (checkValidation()) {
      dispatch(Action.editHabit(habit));
      router.push(`/habits/${habit.goal}`);
    } else {
      dispatch(Action.updateError("one of the fields is not set"));
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
        goal={habit.goal}
        onClick={editHabitHandle}
        updateHabit={updateHabit}
        habit={habit}
        title={"EDIT HABIT"}
      />
      {/* <div>{JSON.stringify(habit)}</div> */}
    </div>
  );
}
