import * as Action from "actions";
import Habit from "components/habits/Habit";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function AllHabits({ goal }) {
  const router = useRouter();
  const { habits } = useSelector((state) => state.habits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Action.getHabitsByGoal(goal));
  }, []);

  console.log("===================HABITS=====");
  // console.log(habits);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        {habits.length === 0 && <div>{"habit list is empty"}</div>}

        <ul className="flex flex-wrap justify-center">
          {habits
            .sort((h1, h2) => {
              console.log({ d1: h1.createdAt, d2: h2.createdAt });
              return new Date(h2.createdAt) - new Date(h1.createdAt);
            })
            .map((habit, key) => (
              <li key={key}>
                <Habit habitItem={habit} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
