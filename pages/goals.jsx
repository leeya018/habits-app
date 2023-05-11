import * as Action from "actions";
import Button from "components/habits/Button";
import Title from "components/habits/Title";
import Input from "components/habits/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Error from "components/habits/Error";
import { useEffect } from "react";

// getCategories
export default function Goals({}) {
  const [name, setName] = useState("");
  const { goals, error } = useSelector((state) => state.habits);
  const router = useRouter();
  console.log(goals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!name) {
      dispatch(Action.getCategories());
    }
  }, [name]);

  const handleAdd = () => {
    dispatch(Action.addGoal(name));
    setName("");
  };

  return (
    <div className="flex justify-center text-white">
      <div
        className="flex flex-col justify-between  shadow-lg items-center bg-gray w-[350px]
       h-[250px] "
      >
        <h1
          className="font-medium text-[18px] text-white w-[177px] 
          h-[30px] relative top-[44px] text-center"
        >
          Add Goal:{" "}
        </h1>

        <Input
          size={"w-[177px] h-[30px]"}
          name="goal name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            dispatch(Action.updateError(""));
          }}
        />

        <Button
          position="relative bottom-[22px]"
          size={"w-[128px] h-[43px]"}
          color="bg-blue"
          onClick={handleAdd}
        >
          add
        </Button>
        {/* </div> */}
        {/* 
        <ul className="flex flex-col">
        {goals.map((goal) => (
          <li
          key={goal.name}
              onClick={() => {
                dispatch(Action.updateChosenGoal(goal.name));
                // router.push({
                //   pathname: "habits",
                //   query: "goal=" + goal.name,
                // });
                router.push(`/habits/${goal.name}`);
              }}
              className="font-bold p-2 border-2 bg-gray-300 hover:bg-gray-500"
            >
              {goal.name}
            </li>
          ))}
        </ul> */}

        {/* <Error>{error}</Error> */}
        {/* <div>{JSON.stringify(goals)}</div> */}
      </div>
    </div>
  );
}
