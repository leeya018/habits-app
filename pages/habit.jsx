import Button from "components/habits/Button";
import { useRouter } from "next/router";

export default function Habit({}) {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h1>HABITS</h1>
        <div>choose your habits : </div>
        <Button onClick={() => router.push("/addhabit")}>add a habit</Button>
      </div>
    </div>
  );
}
