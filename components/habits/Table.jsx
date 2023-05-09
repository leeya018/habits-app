import { useState } from "react";
import Input from "./Input";
import * as UTIL from "@/util";

function Table({ items, updateTodaysHabit }) {
  return (
    <table className="border-4 ">
      <thead>
        <tr>
          <th className="border-2 ">key</th>
          <th className="border-2 ">date</th>
          <th className="border-2 ">amount</th>
          <th className="border-2 ">improve</th>
          <th className="border-2 ">reserve</th>
          <th className="border-2 ">learn</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          console.log({ index });
          return (
            <TableRow
              index={index}
              item={item}
              updateTodaysHabit={updateTodaysHabit}
            />
          );
        })}
      </tbody>
    </table>
  );
}

function TableRow({ index, item, updateTodaysHabit }) {
  const [texts, setTexts] = useState({
    improve: item.improve,
    reserve: item.reserve,
    learn: item.learn,
  });

  const handleChange = ({ name, value }) => {
    setTexts({ ...texts, [name]: value });
  };
  return (
    <tr className="border-4 " key={index}>
      <td className="border-4 ">{index + 1}</td>
      <td className="border-4 ">{item.date}</td>

      <td className="border-4 "> {item.amount}</td>
      <td className="border-4 ">
        <Input
          name="improve"
          disabled={UTIL.getTodayDate() !== item.date}
          value={texts.improve}
          onChange={(e) => {
            handleChange(e.target);
            updateTodaysHabit(e.target);
          }}
        />
      </td>
      <td className="border-4 ">
        <Input
          name="reserve"
          disabled={UTIL.getTodayDate() !== item.date}
          value={texts.reserve}
          onChange={(e) => {
            handleChange(e.target);
            updateTodaysHabit(e.target);
          }}
        />
      </td>
      <td className="border-4 ">
        <Input
          name="learn"
          disabled={UTIL.getTodayDate() !== item.date}
          value={texts.learn}
          onChange={(e) => {
            handleChange(e.target);
            updateTodaysHabit(e.target);
          }}
        />
      </td>
    </tr>
  );
}

export default Table;
