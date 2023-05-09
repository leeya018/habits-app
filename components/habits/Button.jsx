import React from "react";

export default function Button({
  children = "",
  onClick,
  color = "bg-blue-500",
  width = "",
  position = "",
}) {
  return (
    <button
      className={`p-2 border-2 text-white ${color} ${width} ${position}`}
      onClick={onClick}
    >
      {/* <button className={`p-2 border-2 bg-${color}-500`} onClick={onClick}> */}
      {children}
    </button>
  );
}
