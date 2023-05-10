import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import * as Action from "actions";
import * as UTIL from "@/util";
import Title from "./Title";
import { useRouter } from "next/router";
import Table from "./Table";
import { useState } from "react";

export default function Habit({ habitItem, showHandle = true }) {
  const { _id, name, description, amount, traces, createdAt, mainGoal } =
    habitItem;
  const dispatch = useDispatch();
  const router = useRouter();
  const [habit, setHabit] = useState(habitItem);
  const [isChanged, setIsChanged] = useState(false);
  // const { habits } = useSelector((state) => state.habits);

  const removeHabit = () => {
    dispatch(Action.deleteHabit(_id, habit.category));
  };

  const createNewTrace = () => {
    return {
      date: new Date().toISOString(),
      amount: 1,
      improve: "",
      reserve: "",
      learn: "",
    };
  };
  console.log({ habitItem });
  const addTraces = (amountToAdd) => {
    setIsChanged(true);

    const dupHabit = { ...habit };
    if (!dupHabit.traces || dupHabit.traces.length === 0) {
      dupHabit.traces = [];
      dupHabit.traces.push(createNewTrace());
    } else {
      const len = dupHabit.traces.length;

      if (UTIL.datesAreEquals(dupHabit.traces[0].date, new Date())) {
        const newAmount = dupHabit.traces[0].amount + amountToAdd;
        if (newAmount >= 0) {
          dupHabit.traces[0].amount = newAmount;
        }
      } else {
        dupHabit.traces.push(createNewTrace());
      }
    }
    setHabit(dupHabit);
  };

  const updateTodaysHabit = ({ name, value }, index) => {
    let dupHabit = { ...habit };

    const dupTraces = [...habit.traces];
    dupTraces[index][name] = value;
    dupHabit.traces = dupTraces;
    setHabit(dupHabit);

    setIsChanged(true);
  };
  const saveHabit = () => {
    console.log("saveHabit");
    console.log({ habit });
    dispatch(Action.editHabit(habit));
    setIsChanged(false);
  };

  const showGraph = () => {
    router.push(`/graph?habitid=${habit._id}`);
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col border-2 border-black rounded-md">
          <div
            className="flex flex-col relative"
            onClick={() => router.push(`/habit/${habit._id}`)}
          >
            {isChanged && (
              <Button position={"absolute top-0 right-0"} onClick={saveHabit}>
                save
              </Button>
            )}
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
                {/* <Button width={"w-full"} onClick={() => addAmountForDid(-1)}> */}
                <Button width={"w-full"} onClick={() => addTraces(-1)}>
                  -
                </Button>
                <Button width={"w-full"} onClick={() => addTraces(1)}>
                  +
                </Button>
              </div>
              <Button width={"w-full"} onClick={showGraph}>
                show graph
              </Button>
              <div>
                <Title>traces </Title>
                <ul className="flex flex-col">
                  <Table
                    totalAmount={habit.amount}
                    items={
                      habit.traces.sort(
                        (itemA, itemB) =>
                          new Date(itemB.date) - new Date(itemA.date)
                      ) || []
                    }
                    updateTodaysHabit={updateTodaysHabit}
                  />
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
    </div>
  );
}
