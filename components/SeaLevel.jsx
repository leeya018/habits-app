import { useState } from "react";
import { useSelector } from "react-redux";

export default function SeaLevel({}) {
  const { level } = useSelector((state) => state.math);

  return (
    <div
      className="absolute w-[100%] bg-blue-400 bottom-0"
      style={{ top: level + "px" }}
    ></div>
  );
}
