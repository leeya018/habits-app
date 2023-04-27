import { useEffect, useState } from "react";
import { sleep, randLeft } from "@/util";
const width = "160px";

export default function Thrill({ thrill, level }) {
  const [position, setPosition] = useState({ top: 0, left: thrill.Left });
  // const [stop, setStop] = useState(false);

  useEffect(() => {
    move();
  }, []);

  const timeInter = 300;
  const lim = 1000;
  const progress = 50;

  const move = async () => {
    let i = position.top;
    while (i < lim) {
      console.log({ stop });
      setPosition((prev) => {
        console.log(prev.top, lim);
        i += progress;
        return { ...prev, top: prev.top + progress };
      });
      await sleep(timeInter);
    }
  };

  return (
    <div
      className="absolute border-2 border-blue-500 w-40 h-20"
      style={{
        top: position.top,
        left: "50vw",
      }}
    >
      {thrill.thrill} = {thrill.result}
    </div>
  );
}
