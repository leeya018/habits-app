import Timer from "components/math/Timer";
import React, { useState, useEffect, useRef } from "react";
import useSound from "hooks/useSound";
import AnimatedImage from "components/math/AnimatedImage";

const operators = ["+", "-", "*"];

function index() {
  const [num1, setNum1] = useState(20);
  const [num2, setNum2] = useState(2);
  const [operator, setOperator] = useState("+");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  //
  const [time, setTime] = useState(10);
  const [countWins, setCountWins] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [showTrophy, setShowTrophy] = useState(false);
  //
  const { sound, playSound } = useSound("/win.wav");

  useEffect(() => {
    inputRef.current.focus();
    setBestScore(localStorage.getItem("score") || 0);
  }, []);
  useEffect(() => {
    if (time == 0) {
      if (parseInt(bestScore) < countWins) {
        localStorage.setItem("score", countWins.toString());
        setBestScore(countWins);
        playSound();
        setShowTrophy(true);
        setTimeout(() => {
          setShowTrophy(false);
          setTime(10);
        }, 3000);
      } else {
        alert("times up");
        // inputRef.current.focus();
      }
      setCountWins(0);
      setTime(10);
    }
  }, [time]);

  useEffect(() => {
    // You can also add event listener to document or specific element
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    setError(false);
    let answer;
    switch (operator) {
      case "+":
        answer = num1 + num2;
        break;
      case "-":
        answer = num1 - num2;
        break;
      case "*":
        answer = num1 * num2;
        break;
      // case "/":
      //   answer = num1 / num2;
      //   break;
      default:
        break;
    }
    if (parseInt(e.target.value) === answer) {
      setCountWins((prev) => prev + 1);
      let tempNum1 = Math.floor(Math.random() * 10);

      let tempNum2 = Math.floor(Math.random() * 10);
      while (tempNum2 === 0) {
        tempNum2 = Math.floor(Math.random() * 10);
      }

      while (tempNum2 > tempNum1) {
        tempNum2 = Math.floor(Math.random() * 10);
      }
      setNum1(tempNum1);
      setNum2(tempNum2);
      setOperator(operators[Math.floor(Math.random() * operators.length)]);
      setUserInput("");
    } else if (e.target.value.length === answer.toString().length) {
      setError(true);
      setTimeout(() => setError(false), 1000);
      setUserInput("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Shift") {
      setUserInput((prev) => prev.substring(0, prev.length - 1));
    }
  };

  return (
    <div className="flex flex-col items-center  h-[100vh] bg-blue_dark text-white">
      {showTrophy && <AnimatedImage />}

      <div className="mt-10">
        <div>Best Score : {bestScore}</div>
        <div>count : {countWins}</div>
        <Timer time={time} setTime={setTime} />
      </div>
      <div className="flex justify-center relative top-44 w-full">
        <div>
          {num1} {operator} {num2} =
        </div>
        <div className="flex justify-center">
          <input
            className="rounded-md border-black border-2 text text-black "
            type="number"
            value={userInput}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            onChange={handleInputChange}
            onBlur={() => inputRef.current.focus()}
          />
          <div className="w-10">
            {error && (
              <span style={{ color: "red", paddingRight: "10px" }}>X</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
