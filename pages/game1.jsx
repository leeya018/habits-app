import SeaLevel from "components/SeaLevel";
import { useSelector, useDispatch } from "react-redux";
import Thrill from "components/Thrill";
import { useEffect, useState } from "react";
import { updatePositions, addLevel, addPoints, addThrill } from "actions";
import Input from "components/Input";

export default function game1({}) {
  const { thrills, points, timeInter } = useSelector((state) => state.math);
  const dispatch = useDispatch();
  useEffect(() => {
    let intervalId = setInterval(() => {
      dispatch(addThrill());
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let intervalId2 = setInterval(() => {
      dispatch(updatePositions());
    }, timeInter);

    return () => clearInterval(intervalId2);
  }, []);

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
