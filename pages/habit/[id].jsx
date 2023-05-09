import Button from "components/habits/Button";
import Habit from "components/habits/Habit";
import ItemCompleted from "components/habits/ItemCompleted";
import Title from "components/habits/Title";
import * as API from "lib/api";
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  console.log("================");
  console.log({ id });
  const habit = await API.getHabit(id);
  console.log("getServerSideProps");
  console.log(habit);
  return {
    props: { habit },
  };
};

export default function HabitItem({ habit }) {
  const router = useRouter();
  // console.log({ id });

  // const createItems = () => {
  //   return Object.keys(habit.traces || {}).map((key) => ({
  //     item: habit.traces[key],
  //     date: key,
  //     destinationAmount: habit.amount,
  //   }));
  // };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <Title>HABIT</Title>
        {/* <div>{JSON.stringify(habit)}</div> */}
        <Habit habit={habit} />
        <div>
          <Title>traces </Title>
          <ul className="flex flex-col">
            {/* <TableComponent items={createItems()} /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
function TableComponent({ items }) {
  // Sample data
  // const data = [
  //   { id: 1, name: "John", age: 28 },
  //   { id: 2, name: "Jane", age: 24 },
  //   { id: 3, name: "Doe", age: 26 },
  // ];

  return (
    <table className="border-4 ">
      <thead>
        <tr>
          <th className="border-2 ">date</th>
          <th>destinationAmount</th>
          <th>amount</th>
          <th>improve</th>
          <th>reserve</th>
          <th>learn</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr className="border-4 " key={index}>
            <td className="border-4 ">{item.date}</td>
            <td className="border-4 "> {item.destinationAmount}</td>
            <td className="border-4 "> {item.amount}</td>
            <td className="border-4 "> {item.improve}</td>
            <td className="border-4 "> {item.reserve}</td>
            <td className="border-4 "> {item.learn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
