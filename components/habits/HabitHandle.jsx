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
      <div
        className="flex flex-col justify-between  shadow-lg items-center bg-gray w-[350px]
       h-[250px] m-2 "
      >
        <Title extra="">{title}</Title>
        <div className="w-[80%] border-2 flex-col justify-between">
          <RowSection
            text={"name"}
            value={habit.name}
            updateHabit={updateHabit}
            type={"text"}
          />
          <RowSection
            text={"description"}
            value={habit.description}
            updateHabit={updateHabit}
            type={"text"}
          />
          <RowSection
            text={"amount"}
            value={habit.amount}
            type={"number"}
            updateHabit={updateHabit}
          />
          <RowSection
            text={"mainGoal"}
            value={habit.mainGoal}
            updateHabit={updateHabit}
            type={"text"}
          />
        </div>
        <Button
          position="relative bottom-[22px]"
          size={"w-[128px] h-[43px]"}
          color="bg-blue"
          onClick={onClick}
        >
          {title}
        </Button>
        {/* <div>{JSON.stringify(habits)}</div>
        <div>{JSON.stringify(habit)}</div> */}
        {/* <Button onClick={() => router.push(`/habits/${habit.goal}`)}>
          go to habits
        </Button> */}
        {/* <Error>{error}</Error> */}
      </div>
    </div>
  );
}

function RowSection({ text, value, type, updateHabit }) {
  return (
    <div className="flex  justify-between ">
      <span>{text + ":"}</span>
      <Input
        type={type}
        name={text}
        value={value}
        onChange={(e) => updateHabit(e.target)}
      />
    </div>
  );
}
