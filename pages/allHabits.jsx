import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function AllHabits({}) {
  const router = useRouter();
  const { habits } = useSelector((state) => state.habits);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <ul>
          {habits.map((habit) => (
            <li>
              <Habit habit={habit} />
            </li>
          ))}
        </ul>
        <button onClick={() => router.push("/addhabit")}>add a habit</button>
      </div>
    </div>
  );
}
