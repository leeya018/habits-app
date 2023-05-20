import React, { useEffect, useRef, useState } from "react";
import Input from "components/habits/Input";
import Button from "components/habits/Button";
import Error from "components/habits/Error";

const items = [
  [
    "what do I want to do ?  ",
    "what is my vision ?  ",
    "why do I want it ?",
    "what it will enable me when I get that ? ",
    "what is the reason that gives me the motivation to do so ? ",
    " what are the benefits that I will gain from having this goal as part fo my life?",
    " how do I know that I gain my goal ? ",
    " when can I expect this kind for results in my life ? ",
    " how would it look / feel , seen, when I will have this goal in my life ? ",
    "who am I when the goal has allready been accomplished ?",
  ],
  [
    "when the goal will be gain ? ",
    "who will be involved in the proccess of achiveng my goal? ",
    "who are the people which have the main part to make my plan start working ?  ",
    "what are the level of commitment this pepole have in the proccess for achiving those goals? ",
    "how we accomplish that target? ",
    "what will be the first step for achiving that target? ",
    "how would I know that I making progress towards my goals/ getting far from it ? ",
    "what are the resources that I will be using to achive my goal ?",
  ],
  [
    "what are the things that I might loose when my plan will be accomplished ? ",
    "who are the people that gonna get effected from my plan ? ",
    "who are the people that can damage the effective of that plan ? ",
    "what are the needs of those people ? ",
    "why they can object to my plan ? ",
    "what are the things in me that can distube me to gain my goal (and what needs that I have , do they surve ) ? ",
  ],
];

const POSITIONS = {
  dreamer: "Dreamer",
  actor: "Actor",
  critic: "Critic",
};

export default function waltdisney() {
  const [itemInd, setItemInd] = useState(0);
  const [questions, setQuestions] = useState(items[0]);
  const [questionInd, setQuestionInd] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [collection, setCollection] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef?.current?.focus();
    }
  }, [inputRef.current]);

  const handleClick = () => {
    if (answer === "") return;
    if (questionInd < questions.length) {
      setAnswers((prev) => [...prev, answer]);
    }
    setQuestionInd(questionInd + 1);
  };

  useEffect(() => {
    if (questionInd >= questions.length) {
      setCollection((prev) => [...prev, answers]);
      setAnswers([]);
      setItemInd((prev) => prev + 1);
      itemInd < 2 && setQuestions(items[itemInd + 1]);
      setQuestionInd(0);
    }
    setAnswer("");
  }, [questionInd]);
  const handleKeyDown = (e) => {
    console.log(e.key);

    if (e.code === "Enter") {
      handleClick();
    }
  };

  const getPosByInd = () => {
    return itemInd === 0
      ? POSITIONS.dreamer
      : itemInd === 1
      ? POSITIONS.actor
      : POSITIONS.critic;
  };

  console.log({ itemInd });
  console.log({ answers });
  console.log({ collection });
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl">waltdisney</h1>
        <h2 className="font-semibold text-3xl">{getPosByInd()}</h2>
        <div>{questions[questionInd]}</div>
        <Input
          type="text"
          name="answer"
          inputRef={inputRef}
          onChange={(e) => setAnswer(e.target.value)}
          value={answer}
          size=""
          onKeyDown={handleKeyDown}
        />
        <Error>You can press Enter as well</Error>
        <Button size="" onClick={handleClick}>
          click here
        </Button>
      </div>

      <div className="flex justify-center flex-col ">
        <h1>sumup </h1>
        <div>
          {itemInd === 3 && (
            <div className=" flex flex-wrap gap-2">
              <Sumup items={collection[0]} title={POSITIONS.dreamer} />
              <Sumup items={collection[1]} title={POSITIONS.actor} />
              <Sumup items={collection[2]} title={POSITIONS.critic} />
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}

function Sumup({ items, title }) {
  return (
    <ul className="flex flex-col">
      <h1>{title}</h1>
      {items?.map((ans, key) => (
        <li key={key}>{ans}</li>
      ))}
    </ul>
  );
}
