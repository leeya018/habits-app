import SeaLevel from "components/SeaLevel";
import Thrill from "components/Thrill";
import { useEffect, useState } from "react";
import { createThrill, randLeft, sleep } from "@/util";

const levelJump = 100;

export default function Game({}) {
  const [thrills, setThrills] = useState([]);
  const [level, setLevel] = useState(850);

  useEffect(() => {
    const createThrills = async () => {
      // while (true) {
      const thrill = createThrill();
      const randL = randLeft();
      console.log(randL);
      setThrills((prev) => [
        ...prev,
        { thrill, result: eval(thrill), left: randL },
      ]);
      await sleep(1000);
    };
    // };
    createThrills();
  }, []);

  const checkColition = () => {};
  //     const randL = randLeft()
  //     const randL = randLeft()
  //     if(randL)
  //   }

  return (
    <div>
      <h1>game {thrills.length}</h1>
      <div>
        {thrills.map((thrill, key) => (
          <Thrill key={key} thrill={thrill} level={level} />
        ))}
      </div>
      <SeaLevel level={level} />
    </div>
  );
}
