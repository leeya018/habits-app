import SeaLevel from "components/SeaLevel";
import { useSelector, useDispatch } from "react-redux";
import Thrill from "components/Thrill";
import { useEffect, useState } from "react";
import { updatePositions, addLevel, addPoints, addThrill } from "actions";
import Input from "components/Input";

export default function game1({}) {
  const { thrills, points, timerInterAddThrill, timerInterProgress, stop } =
    useSelector((state) => state.math);
  const dispatch = useDispatch();

  let intervalId;
  let intervalId2;

  useEffect(() => {
    intervalId = setInterval(() => {
      dispatch(addThrill());
    }, timerInterAddThrill);
    if (stop === true) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [stop]);

  useEffect(() => {
    intervalId2 = setInterval(() => {
      dispatch(updatePositions());
    }, timerInterProgress);

    if (stop === true) {
      clearInterval(intervalId2);
    }
    return () => clearInterval(intervalId2);
  }, [stop]);

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
