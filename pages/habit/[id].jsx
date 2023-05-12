import Button from "components/habits/Button";
import Habit from "components/habits/Habit";
import Title from "components/habits/Title";
import * as API from "lib/api";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  console.log("================");
  console.log({ id });
  const habit = await API.getHabit(id);
  console.log("getServerSideProps");
  console.log(habit);
  return {
    props: { habit },
  };
};

export default function HabitItem({ habit }) {
  const router = useRouter();

  useEffect(() => {}, [habit]);

  return (
    <div>
      <div className="flex absolute top-1 left-1 gap-1">
        <Button color="bg-gray_dark" onClick={() => router.back()}>
          back{" "}
        </Button>
        <Button color="bg-gray_dark" onClick={() => router.push("/goals")}>
          goals{" "}
        </Button>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col">
          {/* <div>{JSON.stringify(habit)}</div> */}
          <Habit habitItem={habit} showTable={true} />
        </div>
      </div>
    </div>
  );
}
