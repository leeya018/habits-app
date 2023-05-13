import * as Action from "actions";
import Button from "components/habits/Button";
import HabitHandle from "components/habits/HabitHandle";
import * as API from "lib/api";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Inter, Roboto } from "next/font/google";

// const montserrat = new Montserrat({
//   weigh: ["400"],
//   subset: ["latin"],
//   variable: "--font-montserrat",
// });

export async function getServerSideProps(context) {
  const { id } = context.query;
  const habitItem = await API.getHabit(id);
  return {
    props: { habitItem }, // will be passed to the page component as props
  };
}

export default function Edit({ habitItem }) {
  // const router = useRouter();
  const [habit, setHabit] = useState(habitItem);
  console.log({ habitItem });
  const router = useRouter();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(Action.updateChosenGoal(habit.goal));
  // }, [habit.goal]);

  const updateHabit = ({ name, value }) => {
    dispatch(Action.updateError());

    setHabit((prev) => ({ ...prev, [name]: value }));
  };

  const editHabitHandle = async () => {
    if (checkValidation()) {
      dispatch(Action.editHabit(habit));
      router.push(`/habits/${habit.goal}`);
    } else {
      dispatch(Action.updateError("one of the fields is not set"));
    }
  };

  const checkValidation = () => {
    let keysLeft = Object.keys(habit).filter((key) => habit[key] === "");
    console.log(keysLeft);
    const isAllSet = keysLeft.length === 0;

    return isAllSet;
  };
  return (
    <div>
      <div className="flex absolute top-1 gap-1 left-1 ">
        <Button
          color="bg-gray_dark"
          onClick={() => {
            router.back();
          }}
        >
          go back
        </Button>
        <Button
          color="bg-gray_dark"
          onClick={() => router.push(`/habits/${habit.goal}`)}
        >
          go to habits
        </Button>
      </div>
      <HabitHandle
        goal={habit.goal}
        onClick={editHabitHandle}
        updateHabit={updateHabit}
        habit={habit}
        title={"Edit Habit"}
      />

      {/* <div>{JSON.stringify(habit)}</div> */}
    </div>
  );
}
