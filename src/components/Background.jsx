import React from "react";
import Bg from "../assets/Bg.svg";

const Background = () => {
  return (
    <>
      <div
        className="absolute w-full top-32 xs:top-24 md:top-64 pointer-events-none opacity-50"
        style={{ backgroundImage: `url(${Bg})`, backgroundPosition: "center", width: "100%", height: "100%", zIndex: "0" }}
      ></div>
    </>
  );
};

export default Background;
