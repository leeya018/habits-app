import Button from "components/habits/Button";
import Input from "components/habits/Input";
import Title from "components/habits/Title";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Error from "components/habits/Error";
import { useEffect } from "react";

export default function HabitHandle({
  goal,
  onClick,
  updateHabit,
  habit,
  title,
}) {
  const router = useRouter();

  console.log(goal);
  const { habits, error, chosenGoal } = useSelector((state) => state.habits);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <Title>
          ${title} for : {goal}
        </Title>
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
          type="number"
          name="amount"
          value={habit.amount}
          onChange={(e) => updateHabit(e.target)}
        />
        <Input
          value={habit.mainGoal}
          name="mainGoal"
          onChange={(e) => updateHabit(e.target)}
        />
        <Button onClick={onClick}>{title}</Button>
        {/* <div>{JSON.stringify(habits)}</div>
        <div>{JSON.stringify(habit)}</div> */}
        <Button onClick={() => router.push(`/habits/${habit.goal}`)}>
          go to habits
        </Button>
        <Error>{error}</Error>
      </div>
    </div>
  );
}
