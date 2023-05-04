import Button from "components/habits/Button";
import Habit from "components/habits/Habit";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function AllHabits({}) {
  const router = useRouter();
  const { habits } = useSelector((state) => state.habits);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        {habits.length === 0 && <div>{"habit list is empty"}</div>}
        <ul>
          {habits.map((habit) => (
            <li>
              <Habit habit={habit} />
            </li>
          ))}
        </ul>
        <Button onClick={() => router.push("/addhabit")}>
          go to add habit
        </Button>
      </div>
    </div>
  );
}
