import Button from "components/habits/Button";
import Title from "components/habits/Title";
import { useRouter } from "next/router";

export const getServerFromProps = async (context) => {
  const id = context.query.id;
  const habit = await getHabit(id);
  return {
    props: { habit },
  };
};

export default function Habit({ habit }) {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <Title>HABIT</Title>
        <Habit habit={habit} />
      </div>
    </div>
  );
}
