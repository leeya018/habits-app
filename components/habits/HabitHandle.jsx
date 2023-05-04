// import { useDispatch } from "react-redux";

// export default function HabitHandle({ habit, onClick, title, buttonTitle }) {
//   const { id, name, description, amount, createdAt, mainGoal } = habit;
//   const dispatch = useDispatch();

//   const removeHabit = () => {
//     dispatch(deleteHabit(id));
//   };
//   return (
//     <div className="flex justify-center">
//     <div className="flex flex-col">
//       <Title>{title}</Title>
//       <input
//         type="text"
//         name="name"
//         onChange={(e) => updateHabit(e.target)}
//       />
//       <input
//         type="text"
//         name="description"
//         onChange={(e) => updateHabit(e.target)}
//       />
//       <input
//         type="text"
//         name="amount"
//         onChange={(e) => updateHabit(e.target)}
//       />
//       <input
//         type="text"
//         name="mainGoal"
//         onChange={(e) => updateHabit(e.target)}
//       />
//     </div>
//     <button onClick={addNewHabit}>add new habit</button>
//   </div>
//   );
// }
