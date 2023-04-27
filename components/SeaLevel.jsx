import { useState } from "react";

export default function SeaLevel({ level }) {
  return (
    <div
      className="absolute w-full border-2 bg-red-500  h-48 "
      style={{ top: level + "px" }}
    >
      SeaLevel
    </div>
  );
}
