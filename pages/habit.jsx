import { useRouter } from "next/router";

export default function Habit({}) {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h1>HABITS</h1>
        <div>choose your habits : </div>
        <button onClick={() => router.push("/addhabit")}>add a habit</button>
      </div>
    </div>
  );
}
