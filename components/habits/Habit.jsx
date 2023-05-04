import { useDispatch } from "react-redux";

export default function Habit({ habit, showHandle = true }) {
  const { id, name, description, amount, createdAt, mainGoal } = habit;
  const buttonRef = useRef();
  const dispatch = useDispatch();

  const removeHabit = () => {
    dispatch(deleteHabit(id));
  };
  const addAmountForDid = () => {};
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div>id : {id}</div>
        <div>name : {name}</div>
        <div>description : {description}</div>
        <div>amount : {amount}</div>
        <div>createdAt : {createdAt}</div>
        <div>mainGoal : {mainGoal}</div>
        <button onClick={removeHabit}>delete</button>

        {/* <button>-</button> */}
        <button onClick={addAmountForDid}>+</button>
      </div>
    </div>
  );
}
