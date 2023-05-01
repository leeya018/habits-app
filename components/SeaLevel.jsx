import { useState } from "react";
import { useSelector } from "react-redux";

import { useRef } from "react";
import { useEffect } from "react";

export default function SeaLevel({}) {
  const { level } = useSelector((state) => state.math);
  return (
    <>
      <div
        className="absolute w-[100%] bg-blue-400 bottom-0"
        style={{ top: level + "px" }}
      >
        <div className="flex ">
          <video
            src="./sea.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="mkv" />
            <source src="mp4" />
          </video>
          {/* <video ref={videoRef2} src="./sea.mp4">
            <source src="mkv" />
            <source src="mp4" />
          </video> */}
        </div>
      </div>
      <div className="absolute border-4 w-6 h-2 border-yellow-400 top-[550px]"></div>
      <div className="absolute border-4 w-6 h-2 border-yellow-400 top-[600px]"></div>
      <div className="absolute border-4 w-6 h-2 border-yellow-400 top-[650px]"></div>
      <div className="absolute border-4 w-6 h-2 border-yellow-400 top-[700px]"></div>
    </>
  );
}
