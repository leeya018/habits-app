import SeaLevel from "components/SeaLevel";
import { useSelector, useDispatch } from "react-redux";
import { minLevel } from "@/util";
import Thrill from "components/Thrill";
import { useEffect, useState } from "react";
import {
  updatePositions,
  addLevel,
  addPoints,
  addThrill,
  clearThrills,
  updateStop,
  resetLevl,
} from "actions";
import Input from "components/Input";

export default function game1({}) {
  const {
    thrills,
    points,
    gameOver,
    timerInterAddThrill,
    timerInterProgress,
    stop,
    level,
  } = useSelector((state) => state.math);
  const dispatch = useDispatch();

  let intervalThrillId;
  let intervalIdProgressId;

  useEffect(() => {
    console.log("back to teht gaem ");
    intervalThrillId = rotation(addThrill, timerInterAddThrill);
    intervalIdProgressId = rotation(updatePositions, timerInterProgress);
    if (stop === true) {
      clearInterval(intervalThrillId);
      clearInterval(intervalIdProgressId);
      dispatch(clearThrills());
      dispatch(addLevel());
      if (level > minLevel) {
        // console.log("level is now : " + level);
        setTimeout(() => {
          dispatch(updateStop(false));
        }, 1000);
      }
    }
    return () => {
      clearInterval(intervalThrillId);
      clearInterval(intervalIdProgressId);
    };
  }, [stop]);

  useEffect(() => {
    if (gameOver) {
      //   alert("game over ");
      clearInterval(intervalThrillId);
      clearInterval(intervalIdProgressId);
      dispatch(clearThrills());
      dispatch(updateStop(true));
      //   dispatch(resetLevl());
    }
  }, [gameOver]);
  const rotation = (callback, timeInter) => {
    const intervalId = setInterval(() => {
      dispatch(callback());
    }, timeInter);

    return intervalId;
  };
  console.log(thrills);

  return (
    <div>
      <h1>game</h1>
      <div>stop : {String(stop)}</div>
      <div>gameOver : {String(gameOver)}</div>
      <div>level : {level}</div>
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
