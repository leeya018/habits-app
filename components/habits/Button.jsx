import React from "react";

export default function Button({ children = "", onClick }) {
  return (
    <button className="p-2 border-2 bg-blue-500" onClick={onClick}>
      {children}
    </button>
  );
}
