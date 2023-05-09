import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import * as Action from "actions";
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
    dispatch(Action.deleteHabit(_id, habit.category));
  };
  // console.log(habits, createdAt);
  const addAmountForDid = (amountToAdd) => {
    console.log({ habit });
    dispatch(Action.addDidAmount(habit, amountToAdd));
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

        {router.pathname.includes("/habit/") ? (
          <div>
            <div className="flex justify-center">
              <Button width={"w-full"} onClick={() => addAmountForDid(-1)}>
                -
              </Button>
              <Button width={"w-full"} onClick={() => addAmountForDid(1)}>
                +
              </Button>
            </div>
            <div>
              <Title>traces </Title>
              <ul className="flex flex-col">
                <TableComponent items={habit.traces || []} />
              </ul>
            </div>
          </div>
        ) : (
          <>
            <Button onClick={() => router.push(`/edithabit/${habit._id}`)}>
              edit
            </Button>
            <Button onClick={removeHabit}>delete</Button>
          </>
        )}
      </div>
    </div>
  );
}
function TableComponent({ items }) {
  return (
    <table className="border-4 ">
      <thead>
        <tr>
          <th className="border-2 ">date</th>
          <th>amount</th>
          <th>improve</th>
          <th>reserve</th>
          <th>learn</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr className="border-4 " key={index}>
            <td className="border-4 ">{index + 1}</td>
            <td className="border-4 ">{item.date}</td>
            <td className="border-4 "> {item.destinationAmount}</td>
            <td className="border-4 "> {item.amount}</td>
            <td className="border-4 "> {item.improve}</td>
            <td className="border-4 "> {item.reserve}</td>
            <td className="border-4 "> {item.learn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
