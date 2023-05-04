import Button from "components/habits/Button";
import Title from "components/habits/Title";
import { useRouter } from "next/router";

export default function Habit({}) {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <Title>HABITS</Title>
        <div>choose your habits : </div>
        <Button onClick={() => router.push("/addhabit")}>add a habit</Button>
      </div>
    </div>
  );
}
