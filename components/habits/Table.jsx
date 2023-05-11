import { useState } from "react";
import Input from "./Input";
import * as UTIL from "@/util";

function Table({ items, updateTodaysHabit, totalAmount }) {
  return (
    <table className="border-4 ">
      <thead>
        <tr>
          <th className="border-2 ">key</th>
          <th className="border-2 ">date</th>
          <th className="border-2 ">amount</th>
          <th className="border-2 ">percent</th>
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
              key={index}
              index={index}
              item={item}
              totalAmount={totalAmount}
              updateTodaysHabit={updateTodaysHabit}
            />
          );
        })}
      </tbody>
    </table>
  );
}

function TableRow({ index, item, updateTodaysHabit, totalAmount }) {
  return (
    <tr
      className={`border-4 ${
        totalAmount <= item.amount ? "bg-green-500" : "bg-white"
      }`}
      key={index}
    >
      <td className="border-4 ">{index + 1}</td>
      <td className="border-4 ">{UTIL.getDateStrIsrael(item.date)}</td>
      {/* <td className="border-4 ">{UTIL.getDateStr(item.date)}</td> */}

      <td className="border-4 "> {item.amount}</td>
      <td className="border-4 ">
        {" "}
        {((item.amount / totalAmount) * 100).toFixed(0)}%
      </td>
      <td className="border-4 ">
        <Input
          name="improve"
          disabled={!UTIL.datesAreEquals(item.date, new Date())}
          value={item.improve}
          onChange={(e) => {
            updateTodaysHabit(e.target, index);
          }}
        />
      </td>
      <td className="border-4 ">
        <Input
          name="reserve"
          disabled={!UTIL.datesAreEquals(item.date, new Date())}
          value={item.reserve}
          onChange={(e) => {
            updateTodaysHabit(e.target, index);
          }}
        />
      </td>
      <td className="border-4 ">
        <Input
          name="learn"
          disabled={!UTIL.datesAreEquals(item.date, new Date())}
          value={item.learn}
          onChange={(e) => {
            updateTodaysHabit(e.target, index);
          }}
        />
      </td>
    </tr>
  );
}

export default Table;
