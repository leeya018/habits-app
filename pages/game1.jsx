import SeaLevel from "components/SeaLevel";
import { useSelector, useDispatch } from "react-redux";
import Thrill from "components/Thrill";
import { useEffect, useState } from "react";
import { addThrill } from "actions";

const levelJump = 100;

export default function game1({}) {
  const { thrills } = useSelector((state) => state.math);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addThrill());
  }, []);

  return (
    <div>
      <h1>game</h1>
      <div>thrills num : {thrills.length} </div>
      {thrills.map((thrill) => (
        <Thrill thrill={thrill} />
      ))}

      <SeaLevel />
    </div>
  );
}
