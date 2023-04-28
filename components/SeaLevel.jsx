import { useState } from "react";
import { useSelector } from "react-redux";

export default function SeaLevel({}) {
  const { level } = useSelector((state) => state.math);

  return (
    <div
      className="absolute w-full border-2 bg-red-500  h-48 "
      style={{ top: level + "px" }}
    >
      SeaLevel
    </div>
  );
}
