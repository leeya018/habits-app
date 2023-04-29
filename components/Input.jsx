import { removeThrill, updateResult } from "actions";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Input({}) {
  //   const [result, setResult] = useState("");
  const { thrills, result } = useSelector((state) => state.math);
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("keydown", handlePress);
    inputRef.current.focus();
    return () => window.removeEventListener("keydown", handlePress);
  }, [result]); // important the dependancy array here because of the closuer e

  console.log({ result });

  const handlePress = (e) => {
    console.log({ result });
    console.log(e.key);
    if (e.key === "Enter") {
      console.log("ENTER");
      console.log({ result });
      dispatch(removeThrill(result));
      dispatch(updateResult(""));
      // cleanThrills()
      //   setAnswer("");
    }
  };

  return (
    <div className="flex justify-center w-full absolute bottom-0">
      <input
        ref={inputRef}
        type="text"
        value={result}
        onChange={(e) => {
          console.log(e.target.value);
          dispatch(updateResult(e.target.value));
        }}
        className="border-4 shadow-orange-400 w-[10rem]"
      />
      {/* <p>{answer}</p> */}
    </div>
  );
}
