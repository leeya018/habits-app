import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { addDidAmount, deleteHabit, editHabit } from "actions";
import Title from "./Title";
import { useRouter } from "next/router";
import ItemCompleted from "./ItemCompleted";

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
  const router = useRouter();
  const { habits } = useSelector((state) => state.habits);
  // console.log(habits);
  // console.log(habit);
  const removeHabit = () => {
    dispatch(deleteHabit(_id, habit.category));
  };
  // console.log(habits, createdAt);
  const addAmountForDid = (amount) => {
    console.log({ habit });
    dispatch(addDidAmount(habit, amount));
  };
  return (
    <div
      className="flex justify-center"
      onClick={() => router.push(`/habit/${habit._id}`)}
    >
      <div className="flex flex-col border-2 border-black rounded-md">
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
                <ItemCompleted
                  item={amountCompletePerDay[key]}
                  date={key}
                  destinationAmount={amount}
                />
                {/* <div
                  className={`${
                    amount > amountCompletePerDay[key]
                      ? "bg-red-400"
                      : "bg-green-500"
                  }`}
                >{`${key} => ${amountCompletePerDay[key]}`}</div> */}
              </li>
            ))}
          </ul>
        </div>
        <Button onClick={removeHabit}>delete</Button>

        {/* <button>-</button> */}

        <Button onClick={() => addAmountForDid(-1)}>-</Button>
        <Button onClick={() => addAmountForDid(1)}>+</Button>
        <Button onClick={() => router.push(`/edithabit/${habit._id}`)}>
          edit
        </Button>
      </div>
    </div>
  );
}
