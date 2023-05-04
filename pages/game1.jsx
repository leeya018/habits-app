import SeaLevel from "components/SeaLevel";
import { useSelector, useDispatch } from "react-redux";
import mexican from "@/images/mexican.jpg";
import { minLevel } from "@/util";
import Thrill from "components/Thrill";
import { useEffect, useState } from "react";
import {
  updatePositions,
  addLevel,
  addPoints,
  addThrill,
  resetGame,
  clearThrills,
  updateStop,
  resetLevl,
  intervalTimerProccess,
  increaseSpeedLevel,
} from "actions";
import Input from "components/math/Input";
import Modal from "components/Modal";

export default function game1({}) {
  const {
    thrills,
    points,
    speedLevel,
    gameOver,
    timerInterAddThrill,
    timerInterProgress,
    stop,
    level,
  } = useSelector((state) => state.math);
  const dispatch = useDispatch();

  let intervalThrillId;
  let intervalIdProgressId;
  let intervalIdSpeedLevel;

  useEffect(() => {
    clearInterval(intervalIdProgressId);
    setTimeout(() => {
      intervalIdProgressId = rotation(updatePositions, timerInterProgress);
    }, 1000);
  }, [speedLevel]);

  useEffect(() => {
    console.log("back to teht gaem ");
    intervalThrillId = rotation(addThrill, timerInterAddThrill);
    intervalIdProgressId = rotation(updatePositions, timerInterProgress);
    intervalIdSpeedLevel = rotation(increaseSpeedLevel, 5000);
    if (stop === true) {
      clearInterval(intervalThrillId);
      clearInterval(intervalIdProgressId);
      clearInterval(intervalIdSpeedLevel);
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
      clearInterval(intervalIdSpeedLevel);
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
      {gameOver && (
        <Modal
          title={"Game Over"}
          text={`you got ${points} points`}
          textButton={`restart game`}
          onClick={() => dispatch(resetGame())}
        />
      )}
      {/* gameContainer */}
      <div className="flex justify-center">
        <div className="absolute left-0 text-2xl">
          <h1 className="font-bold underline">Math Game</h1>
          <div>level : {level}</div>
          <div>points total : {points}</div>
          <div>speedLevel : {speedLevel}</div>
          <div>timerInterProgress : {timerInterProgress}</div>
          {/* <div>stop : {String(stop)}</div> */}
          {/* <div>gameOver : {String(gameOver)}</div> */}
          {/* <button onClick={() => dispatch(addPoints())}>add level</button> */}
          {/* <button onClick={() => dispatch(addLevel())}>add level</button> */}
          {/* <div>thrills num : {thrills.length} </div> */}
        </div>
        <div className="relative w-[70%] h-[100vh] border-4 border-black">
          <img
            src={mexican.src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />
          {thrills.map((thrill, key) => (
            <Thrill key={key} thrill={thrill} />
          ))}

          <SeaLevel />
          <Input />
        </div>
      </div>
    </div>
  );
}
