import { addHabit } from "actions";
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
  const { habits } = useSelector((state) => state.habits);

  const updateHabit = ({ name, value }) => {
    setHabit((prev) => ({ ...prev, [name]: value }));
  };

  const addNewHabit = () => {
    const newHabit = {
      ...habit,
      id: uuidv4(),
      createdAt: new Date().toDateString(),
      amountCompletePerDay: {},
    };
    dispatch(addHabit(newHabit));
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h1>NEW HABIT</h1>
        <Input
          type="text"
          name="name"
          value={habit.name}
          onChange={(e) => updateHabit(e.target)}
        />
        <Input
          type="text"
          name="description"
          value={habit.description}
          onChange={(e) => updateHabit(e.target)}
        />
        <Input
          type="text"
          name="amount"
          value={habit.amount}
          onChange={(e) => updateHabit(e.target)}
        />
        <Input
          type="text"
          value={habit.mainGaol}
          name="mainGoal"
          onChange={(e) => updateHabit(e.target)}
        />
        <Button onClick={addNewHabit}>add new habit</Button>
        <div>{JSON.stringify(habits)}</div>
        <div>{JSON.stringify(habit)}</div>
        <Button onClick={() => router.push("/allhabits")}>go to habits</Button>
      </div>
    </div>
  );
}
