import { addHabit, updateError } from "actions";
import Button from "components/habits/Button";
import Input from "components/habits/Input";
import Title from "components/habits/Title";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Error from "components/habits/Error";

export async function getServerSideProps(context) {
  const { category } = context.query;
  return {
    props: { category }, // will be passed to the page component as props
  };
}
export default function AddHabit({ category }) {
  const router = useRouter();
  const [habit, setHabit] = useState({
    name: "",
    description: "",
    amount: "",
    mainGoal: "",
    category,
  });
  console.log(category);
  const dispatch = useDispatch();
  const { habits, error } = useSelector((state) => state.habits);

  const updateHabit = ({ name, value }) => {
    dispatch(updateError());

    setHabit((prev) => ({ ...prev, [name]: value }));
  };

  const checkValidation = () => {
    let keysLeft = Object.keys(habit).filter((key) => habit[key] === "");
    console.log(keysLeft);
    const isAllSet = keysLeft.length === 0;

    return isAllSet;
  };
  const addNewHabit = () => {
    if (checkValidation()) {
      const newHabit = {
        ...habit,
        id: uuidv4(),
        createdAt: new Date().toDateString(),
        amountCompletePerDay: {},
      };
      dispatch(addHabit(newHabit));
      setHabit({ name: "", description: "", amount: "", mainGoal: "" });
    } else {
      dispatch(updateError("one of the fields is not set"));
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <Title>NEW HABIT for : {category}</Title>
        <Input
          name="name"
          value={habit.name}
          onChange={(e) => updateHabit(e.target)}
        />
        <Input
          name="description"
          value={habit.description}
          onChange={(e) => updateHabit(e.target)}
        />
        <Input
          name="amount"
          value={habit.amount}
          onChange={(e) => updateHabit(e.target)}
        />
        <Input
          value={habit.mainGoal}
          name="mainGoal"
          onChange={(e) => updateHabit(e.target)}
        />
        <Button onClick={addNewHabit}>add new habit</Button>
        {/* <div>{JSON.stringify(habits)}</div> */}
        <div>{JSON.stringify(habit)}</div>
        <Button onClick={() => router.push("/allhabits")}>go to habits</Button>
        <Error>{error}</Error>
      </div>
    </div>
  );
}
