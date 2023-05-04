import { addHabit } from "actions";
import Button from "components/habits/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const geItem = (arr, id) => {
  return arr.filter((item) => item.id === id)[0];
};

// chekc how do I get the id from the props .

const id = "from server";

//  how to implemetn this.
const getServerFromProps = () => {
  const id = router.params.id;
  return {
    props: { id },
  };
};
export default function Handle({ id }) {
  const router = useRouter();
  const { habits } = useSelector((state) => state.habits);
  const [habit, setHabit] = useState(geItem(habits, id));
  const dispatch = useDispatch();

  const updateHabit = ({ name, value }) => {
    setHabit((prev) => ({ ...prev, [name]: value }));
  };

  const updateHabitHandle = () => {
    dispatch(update(newHabit));
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h1>NEW HABIT</h1>
        <input
          type="text"
          name="name"
          value={habit.name}
          onChange={(e) => updateHabit(e.target)}
        />
        <input
          type="text"
          name="description"
          value={habit.description}
          onChange={(e) => updateHabit(e.target)}
        />
        <input
          type="text"
          name="amount"
          value={habit.amount}
          onChange={(e) => updateHabit(e.target)}
        />
        <input
          type="text"
          name="mainGoal"
          value={habit.mainGoal}
          onChange={(e) => updateHabit(e.target)}
        />
      </div>
      <Button onClick={updateHabitHandle}>update habit</Button>
    </div>
  );
}
