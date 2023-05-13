import Button from "components/habits/Button";
import { useRouter } from "next/router";
import AllHabits from "components/habits/allhabits";

export async function getServerSideProps(context) {
  const { goal } = context.query;
  return {
    props: { goal }, // will be passed to the page component as props
  };
}
export default function AddHabit({ goal }) {
  const router = useRouter();

  return (
    <div>
      <div className="flex gap-1 ">
        <Button
          color="bg-gray_dark"
          onClick={() => {
            router.back();
          }}
        >
          go back
        </Button>
        <Button
          color="bg-gray_dark"
          onClick={() => {
            router.push(`/goals`);
          }}
        >
          goals{" "}
        </Button>
        <Button
          color="bg-blue"
          onClick={() => {
            router.push(`/addhabit/${goal}`);
          }}
        >
          add habit{" "}
        </Button>
      </div>
      <AllHabits goal={goal} />
    </div>
  );
}
