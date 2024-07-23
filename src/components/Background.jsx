import React from "react";
import { Bg } from "../assets/image";

const Background = () => {
  return (
    <>
      <div className="w-full">
        <div className="absolute left-0 top-1/2 lg:top-1/4 z-0 h-[700px] w-1/2 rounded-tr-[600px] bg-gradient-to-t from-[#0b0b0e] to-[#fff] opacity-[1%]"></div>
        <div className="absolute right-0 top-1/2 lg:top-1/4 z-0 h-[700px] w-1/2 rounded-tl-[600px] bg-gradient-to-t from-[#0b0b0e] to-[#fff] opacity-[1%]"></div>
      </div>
    </>
  );
};

export default Background;
