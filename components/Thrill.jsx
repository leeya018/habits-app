import { useEffect, useState } from "react";
import { sleep, randLeft } from "@/util";
import { useSelector } from "react-redux";
const width = "160px";

export default function Thrill({ thrill }) {
  const { level, timeInter, progress } = useSelector((state) => state.math);

  useEffect(() => {}, []);

  return (
    <div
      className="absolute border-2 text-center border-blue-500 px-2 py-3 font-bold "
      style={{
        top: thrill.position.top,
        left: thrill.position.left,
      }}
    >
      {thrill.thrill} ={/* {thrill.thrill} = {thrill.result} */}
    </div>
  );
}
