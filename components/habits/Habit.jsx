import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { addDidAmount, deleteHabit, editHabit } from "actions";
import Title from "./Title";
import { useRouter } from "next/router";
import ItemCompleted from "./ItemCompleted";

export default function Habit({ habit, showHandle = true }) {
  const { _id, name, description, amount, traces, createdAt, mainGoal } = habit;
  const dispatch = useDispatch();
  const router = useRouter();
  const { habits } = useSelector((state) => state.habits);
  // console.log(habits);
  // console.log(habit);
  const removeHabit = () => {
    dispatch(deleteHabit(_id, habit.category));
  };
  // console.log(habits, createdAt);
  const addAmountForDid = (amountToAdd) => {
    console.log({ habit });
    dispatch(addDidAmount(habit, amountToAdd));
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col border-2 border-black rounded-md">
        <div
          className="flex flex-col"
          onClick={() => router.push(`/habit/${habit._id}`)}
        >
          <div>id : {_id}</div>
          <div>name : {name}</div>
          <div>description : {description}</div>
          <div>amount : {amount}</div>
          <div>createdAt : {createdAt}</div>
          <div>mainGoal : {mainGoal}</div>
        </div>
        <Button onClick={removeHabit}>delete</Button>
        <Button onClick={() => addAmountForDid(-1)}>-</Button>
        <Button onClick={() => addAmountForDid(1)}>+</Button>
        <Button onClick={() => router.push(`/edithabit/${habit._id}`)}>
          edit
        </Button>
      </div>
    </div>
  );
}
