import Graph from "components/habits/Graph";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import * as API from "lib/api";

export async function getServerSideProps(context) {
  const { habitid } = context.query;
  const habit = await API.getHabit(habitid);
  return {
    props: { habit }, // will be passed to the page component as props
  };
}
export default function Homepage({ habit }) {
  const router = useRouter();
  // const { habits } = useSelector((state) => state.habits);
  console.log({ habit });
  const dataArr = habit.traces.map((trace) => ({
    date: trace.date,
    amount: trace.amount,
  }));
  return (
    <div className="">
      <h1>graph</h1>
      <Graph items={dataArr} totalAmount={parseInt(habit.amount)} />
    </div>
  );
}