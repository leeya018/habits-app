import { addHabit, updateError } from "actions";
import Button from "components/habits/Button";
import Input from "components/habits/Input";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function AddHabit({}) {
  const router = useRouter();
  const [habit, setHabit] = useState({
    name: "",
    description: "",
    amount: "",
    mainGoal: "",
  });
  const dispatch = useDispatch();
  const { habits, error } = useSelector((state) => state.habits);

  const updateHabit = ({ name, value }) => {
    dispatch(updateError());

    setHabit((prev) => ({ ...prev, [name]: value }));
  };

  const checkValidation = () => {
    let keysLeft = Object.keys(habit).filter((key) => habit[key] === "");
    console.log(keysLeft);
    const isAllSet = keysLeft.length === 0;

    return isAllSet;
  };
  const addNewHabit = () => {
    if (checkValidation()) {
      const newHabit = {
        ...habit,
        id: uuidv4(),
        createdAt: new Date().toDateString(),
        amountCompletePerDay: {},
      };
      dispatch(addHabit(newHabit));
      setHabit({ name: "", description: "", amount: "", mainGoal: "" });
    } else {
      dispatch(updateError("one of the fields is not set"));
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h1>NEW HABIT</h1>
        <Input
          name="name"
          value={habit.name}
          onChange={(e) => updateHabit(e.target)}
        />
        <Input
          name="description"
          value={habit.description}
          onChange={(e) => updateHabit(e.target)}
        />
        <Input
          name="amount"
          value={habit.amount}
          onChange={(e) => updateHabit(e.target)}
        />
        <Input
          value={habit.mainGoal}
          name="mainGoal"
          onChange={(e) => updateHabit(e.target)}
        />
        <Button onClick={addNewHabit}>add new habit</Button>
        {/* <div>{JSON.stringify(habits)}</div> */}
        <div>{JSON.stringify(habit)}</div>
        <Button onClick={() => router.push("/allhabits")}>go to habits</Button>
        <div className="bg-yellow-400 text-red-600 font-bold">{error}</div>
      </div>
    </div>
  );
}
