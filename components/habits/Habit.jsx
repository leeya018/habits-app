import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import * as Action from "actions";
import * as UTIL from "@/util";
import Title from "./Title";
import { useRouter } from "next/router";
import { useState } from "react";
import BasicTable from "./Table";

import { BsTrash, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

export default function Habit({ habitItem, showTable = false }) {
  const { id, name, description, amount, traces, createdAt, goal } = habitItem;
  const dispatch = useDispatch();
  const router = useRouter();

  const [habit, setHabit] = useState(habitItem);
  const [isChanged, setIsChanged] = useState(false);
  const [showNav, setShowNav] = useState(false);
  // const { habits } = useSelector((state) => state.habits);

  // const { showModal } = useSelector((state) => state.habits);
  useEffect(() => {
    completLostDays();
  }, []);

  const completLostDays = () => {
    const lastItem = habit.traces.sort(
      (item1, item2) => item2.date - item1.date
    )[0];
    if (!lastItem) return;
    const daysDiff = Math.floor(
      (new Date() - new Date(lastItem?.date)) / (1000 * 60 * 60 * 24)
    );
    console.log({ daysDiff });
    let i = 1;
    let dupTraces = [...habit.traces];
    while (i <= daysDiff) {
      const newDay = UTIL.addDays(lastItem.date, i);
      console.log({ newDay });
      dupTraces.push({
        date: newDay,
        amount: 0,
        improve: "",
        reserve: "",
        learn: "",
      });
      i++;
    }
    let dupHabit = { ...habit };
    dupHabit.traces = dupTraces;
    setHabit(dupHabit);
    dispatch(Action.editHabit(dupHabit));
  };
  // const removeHabit = () => {
  //   dispatch(Action.deleteHabit(id, habit.goal));
  // };

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
    router.push(`/graph?habitid=${habit.id}`);
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-center ">
        <div
          className="flex flex-col justify-between relative shadow-lg items-center bg-gray w-[350px]
       h-[250px] m-2 "
        >
          <div
            className="absolute top-3 flex flex-col right-1 p-2 cursor-pointer"
            onClick={() => setShowNav((prev) => !prev)}
          >
            <BsThreeDotsVertical />

            {showNav && (
              <div className="absolute right-10">
                <div className="flex flex-col gap-2">
                  <BsTrash
                    className="text-red"
                    onClick={() => {
                      dispatch(Action.updateModalShow(true));
                      console.log("chosent on trash =>  " + habitItem.id);
                      console.log({ trashHabit: habitItem });
                      dispatch(Action.updateChosenHabit(habitItem));
                    }}
                  />
                  <AiOutlineEdit
                    onClick={() => router.push(`/edithabit/${habit.id}`)}
                    className="text-blue"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="px-2 flex flex-col justify-between top-2 h-[70%]">
            {isChanged && (
              <Button
                size="w-[90px] h-[43px]"
                position={"absolute top-0 right-0"}
                onClick={saveHabit}
              >
                save
              </Button>
            )}
            <Title extra={"flex justify-center"}>{name}</Title>

            <RowSection text={"description"} value={description} />
            <RowSection text={"amount"} value={amount} />
            <RowSection
              text={"createdAt"}
              value={UTIL.getDateStrIsrael(createdAt)}
            />
            <RowSection text={"goal"} value={goal} />
          </div>
          {router.pathname.includes("/habit/") ? (
            <div>
              <div className="flex justify-center gap-1">
                <Button size="w-[43px] h-[43px]" onClick={() => addTraces(-1)}>
                  -
                </Button>
                <Button size="w-[43px] h-[43px]" onClick={() => addTraces(1)}>
                  +
                </Button>
              </div>
              <Button
                size="w-[90px] h-[43px]"
                position={"absolute top-0 left-0"}
                onClick={showGraph}
              >
                to graph
              </Button>
            </div>
          ) : (
            <div className="flex justify-center gap-2 relative bottom-2">
              <Button
                color="bg-blue"
                onClick={() => router.push(`/habit/${habit.id}`)}
              >
                Details
              </Button>
            </div>
          )}
        </div>
      </div>
      {showTable && (
        <ul className="flex flex-col">
          <BasicTable
            totalAmount={habit.amount}
            items={
              habit.traces.sort(
                (itemA, itemB) => new Date(itemB.date) - new Date(itemA.date)
              ) || []
            }
            updateTodaysHabit={updateTodaysHabit}
          />
        </ul>
      )}
    </div>
  );
}

function RowSection({ text, value }) {
  return (
    <div className="flex ">
      <span>{text + " : "}</span>
      <span />
      {value}
    </div>
  );
}
