import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { addDidAmount, deleteHabit, editHabit } from "actions";
import Title from "./Title";
import { useRouter } from "next/router";
import Input from "./Input";

export default function ItemCompleted({ item, date, destinationAmount }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [itemComp, setItemComp] = useState({
    ...item,
    improve: "",
    reserve: "",
    learn: "",
  });
  const { habits } = useSelector((state) => state.habits);
  const { amount, improve, reserve, learn } = item;

  const updateItemComp = ({ name, value }) => {
    setItemComp((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col justify-between">
      <div>date : {date}</div>
      <div>amount : {destinationAmount}</div>
      <Input
        type="text"
        name="improve"
        value={itemComp.improve}
        onChange={(e) => updateItemComp(e.target)}
      />
      <Input
        type="text"
        name="reserve"
        value={itemComp.reserve}
        onChange={(e) => updateItemComp(e.target)}
      />
      <Input
        type="text"
        name="learn"
        value={itemComp.learn}
        onChange={(e) => updateItemComp(e.target)}
      />
    </div>
  );
}