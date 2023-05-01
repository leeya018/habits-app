import { useState } from "react";
import { useSelector } from "react-redux";

export default function SeaLevel({}) {
  const { level } = useSelector((state) => state.math);

  return (
    <>
      <div
        className="absolute w-[100%] bg-blue-400 bottom-0"
        style={{ top: level + "px" }}
      ></div>
      <div className="absolute border-4 w-6 h-2 border-yellow-400 top-[550px]"></div>
      <div className="absolute border-4 w-6 h-2 border-yellow-400 top-[600px]"></div>
      <div className="absolute border-4 w-6 h-2 border-yellow-400 top-[650px]"></div>
      <div className="absolute border-4 w-6 h-2 border-yellow-400 top-[700px]"></div>
    </>
  );
}
