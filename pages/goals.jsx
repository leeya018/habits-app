import * as Action from "actions";
import Button from "components/habits/Button";
import Input from "components/habits/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Goal from "components/habits/Goal";
import { v4 as uuidv4 } from "uuid";

export default function Goals({}) {
  // getCategories
  const [goalObj, setGoalObj] = useState({
    name: "",
    description: "",
  });

  const { goals, error } = useSelector((state) => state.habits);
  const router = useRouter();
  console.log(goals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Action.getCategories());
  }, []);

  const updateGoal = ({ name, value }) => {
    dispatch(Action.updateError());

    setGoalObj((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    dispatch(
      Action.addGoal({
        ...goalObj,
        id: uuidv4(),
        createdAt: new Date().toISOString(),
      })
    );
    setGoalObj({ name: "", description: "" });
  };

  const sort = (arr) => {
    return arr.sort((g1, g2) => {
      console.log({ g1: g1.createdAt, g2: g2.createdAt });
      return new Date(g2.createdAt) - new Date(g1.createdAt);
    });
  };

  return (
    <div>
      {/* // first time */}
      <div className="flex justify-center border-2">
        <div
          className="flex flex-col justify-between  shadow-lg items-center bg-gray w-[350px]
        h-[250px] "
        >
          <h1
            className="font-medium text-[18px]  w-[177px] 
          h-[30px] relative top-[22px] text-center"
          >
            Add Goal:{" "}
          </h1>

          <Input
            size={"w-[177px] h-[30px]"}
            name="name"
            value={goalObj.name}
            onChange={(e) => updateGoal(e.target)}
          />
          <Input
            size={"w-[177px] h-[30px]"}
            name="description"
            value={goalObj.description}
            onChange={(e) => updateGoal(e.target)}
          />

          <Button
            position="relative bottom-[22px]"
            size={"w-[128px] h-[43px]"}
            color="bg-blue"
            onClick={handleAdd}
          >
            add
          </Button>
        </div>
      </div>
      <ul className="m-2 flex flex-wrap justify-center gap-2">
        {sort(goals).map((goal, key) => (
          <Goal key={key} goal={goal} />
        ))}
      </ul>

      {/* <Error>{error.message}</Error> */}
      {/* <div>{JSON.stringify(goals)}</div> */}
    </div>
  );
}
