import { useEffect } from "react";
import Button from "./Button";
import * as Action from "actions";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

// getCategories
export default function Goal({ goal }) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <li
      className="flex flex-col justify-between  shadow-lg items-center bg-gray w-[350px]
       h-[250px] "
    >
      <h1
        className="font-medium text-[18px] text-white w-[177px] 
          h-[30px] relative top-[44px] text-center"
      >
        {goal.name}
      </h1>

      <div className="">description </div>

      <Button
        onClick={() => {
          dispatch(Action.updateChosenGoal(goal.name));

          router.push(`/habits/${goal.name}`);
        }}
        position="relative bottom-[22px]"
        size={"w-[128px] h-[43px]"}
        color="bg-blue"
      >
        add
      </Button>
    </li>
  );
}
