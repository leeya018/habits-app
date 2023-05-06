import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { addDidAmount, deleteHabit, editHabit } from "actions";
import Title from "./Title";

export default function Habit({ habit, showHandle = true }) {
  const {
    _id,
    name,
    description,
    amount,
    amountCompletePerDay,
    createdAt,
    mainGoal,
  } = habit;
  const dispatch = useDispatch();
  const { habits } = useSelector((state) => state.habits);
  // console.log(habits);
  // console.log(habit);
  const removeHabit = () => {
    dispatch(deleteHabit(_id));
  };
  // console.log(habits, createdAt);
  const addAmountForDid = () => {
    console.log({ habit });
    dispatch(addDidAmount(habit));
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div>id : {_id}</div>
        <div>name : {name}</div>
        <div>description : {description}</div>
        <div>amount : {amount}</div>
        <div>createdAt : {createdAt}</div>
        <div>mainGoal : {mainGoal}</div>
        <div>
          <Title>amountCompletePerDay </Title>
          <ul>
            {Object.keys(amountCompletePerDay || {}).map((key) => (
              <li key={key}>
                <div>{`${key} => ${amountCompletePerDay[key]}`}</div>
              </li>
            ))}
          </ul>
        </div>
        <Button onClick={removeHabit}>delete</Button>

        {/* <button>-</button> */}

        <Button onClick={addAmountForDid}>+</Button>
      </div>
    </div>
  );
}
