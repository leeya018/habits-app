import SeaLevel from "components/SeaLevel";
import { useSelector, useDispatch } from "react-redux";
import Thrill from "components/Thrill";
import { useEffect, useState } from "react";
import {
  updatePositions,
  addLevel,
  addPoints,
  addThrill,
  clearThrills,
} from "actions";
import Input from "components/Input";

export default function game1({}) {
  const { thrills, points, timerInterAddThrill, timerInterProgress, stop } =
    useSelector((state) => state.math);
  const dispatch = useDispatch();

  let intervalThrillId;
  let intervalIdProgressId;

  useEffect(() => {
    intervalThrillId = rotation(addThrill, timerInterAddThrill);
    intervalIdProgressId = rotation(updatePositions, timerInterProgress);
    return () => {
      clearInterval(intervalThrillId);
      clearInterval(intervalIdProgressId);
    };
  }, [stop]);

  const rotation = (callback, timeInter) => {
    const intervalId = setInterval(() => {
      dispatch(callback());
    }, timeInter);

    if (stop === true) {
      clearInterval(intervalId);
      dispatch(clearThrills());
    }
    return intervalId;
  };
  console.log(thrills);

  return (
    <div>
      <h1>game</h1>
      <div>points total : {points}</div>
      <button onClick={() => dispatch(addPoints())}>add level</button>
      {/* <button onClick={() => dispatch(addLevel())}>add level</button> */}
      <div>thrills num : {thrills.length} </div>
      {thrills.map((thrill, key) => (
        <Thrill key={key} thrill={thrill} />
      ))}

      <SeaLevel />
      <Input />
    </div>
  );
}
