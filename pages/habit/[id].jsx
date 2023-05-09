import Button from "components/habits/Button";
import Habit from "components/habits/Habit";
import ItemCompleted from "components/habits/ItemCompleted";
import Title from "components/habits/Title";
import { getHabit } from "lib/api";
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  console.log("================");
  console.log({ id });
  const habit = await getHabit(id);
  return {
    props: { habit },
  };
};

export default function HabitItem({ habit }) {
  const router = useRouter();
  // console.log({ id });
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <Title>HABIT</Title>
        {/* <div>{JSON.stringify(habit)}</div> */}
        <Habit habit={habit} />
        <div>
          <Title>amountCompletePerDay </Title>
          <ul className="flex flex-col">
            {Object.keys(habit.amountCompletePerDay || {}).map((key) => (
              <li key={key}>
                <ItemCompleted
                  item={habit.amountCompletePerDay[key]}
                  date={key}
                  destinationAmount={habit.amount}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
