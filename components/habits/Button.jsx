import React from "react";

export default function Button({
  children = "",
  onClick,
  color = "bg-blue-500",
  width = "",
  position = "",
  size = "",
}) {
  return (
    <button
      className={`p-2  text-white flex items-center
       justify-center rounded-md  ${color} ${width} ${position} ${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
