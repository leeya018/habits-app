import * as Action from "actions";
import Button from "components/habits/Button";
import Habit from "components/habits/Habit";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function AllHabits({ category }) {
  const router = useRouter();
  const { habits } = useSelector((state) => state.habits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Action.getHabitsByCategory(category));
  }, []);

  console.log("===================HABITS=====");
  // console.log(habits);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        {habits.length === 0 && <div>{"habit list is empty"}</div>}

        <ul>
          {habits.map((habit, key) => (
            <li key={key}>
              <Habit habit={habit} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
