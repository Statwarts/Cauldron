import React from "react";
import { Link } from "react-router-dom";
import Cauldron from "../../assets/Cauldron.svg";

const Nav = () => {
  const maskStyle = {
    maskImage: "linear-gradient(to top, transparent 0%, white 100%)",
    WebkitMaskImage: "linear-gradient(to top, transparent 0%, white 100%)",
    zIndex: "20",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "#0F101491",
    backdropFilter: "blur(6px)",
  };

  const maskStyle2 = {
    maskImage: "linear-gradient(to top, transparent 0%, white 50%)",
    WebkitMaskImage: "linear-gradient(to top, transparent 0%, white 50%)",
    zIndex: "20",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    // background: "#0F101491",
    backdropFilter: "blur(3px)",
  };

  const maskStyle3 = {
    maskImage: "linear-gradient(to top, transparent 0%, white 50%)",
    WebkitMaskImage: "linear-gradient(to top, transparent 0%, white 50%)",
    zIndex: "20",
    position: "absolute",
    top: "0",
    height: "20px",
    left: "0",
    right: "0",
    bottom: "0",
    // background: "#0F101491",
    backdropFilter: "blur(3px)",
  };

  return (
    <>
      <div className="fixed z-20 h-[60px] w-full border-[#414141]">
        <div className="wrapper flex-center relative m-auto h-full w-full py-3">
          <div style={maskStyle} />
          <div style={maskStyle2} />
          <div style={maskStyle3} />
          <div className="flex-between z-40 w-full">
            <Link to="/" className="flex-center gap-1">
              <img className="w-5" src={Cauldron} alt="Cauldron" />
              <p className="text-md text-[#e3e7ea]">Cauldron</p>
            </Link>
            <Link
              to="/register"
              className="flex-center group cursor-pointer rounded-full border border-[#232527] px-4 py-[6px] text-sm text-[#e3e7eac3] transition-all hover:text-[#e3e7ea] group-hover:border-[#2f3134]"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
