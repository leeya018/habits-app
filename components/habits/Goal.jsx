import Button from "./Button";
import * as Action from "actions";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Title from "./Title";

// getCategories
export default function Goal({ goal }) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <li
      className="flex flex-col justify-between  shadow-lg items-center bg-gray w-[350px]
       h-[250px] px-2"
    >
      <h1
        className="font-medium text-[18px]  w-[177px] 
          h-[30px] relative top-[20px] text-center"
      >
        <Title> {goal.name}</Title>
      </h1>

      <div className="pt-2">{goal.description} </div>

      <Button
        onClick={() => {
          dispatch(Action.updateChosenGoal(goal));
          router.push(`/goal/${goal.id}/addhabit`);
        }}
        position="relative bottom-[22px]"
        size={"w-[128px] h-[43px]"}
        color="bg-blue"
      >
        see habits
      </Button>
    </li>
  );
}
