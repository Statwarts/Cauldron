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

  return (
    <>
      <div className="fixed z-20 h-[60px] w-full border-[#414141]">
        <div className="wrapper flex-center relative m-auto h-full w-full py-3">
          <div style={maskStyle} />
          <div style={maskStyle2} />
          <div className="flex-between z-40 w-full">
            <Link to="/" className="flex-center gap-1">
              <img className="w-5" src={Cauldron} alt="Cauldron" />
              <p className="text-md text-white">Cauldron</p>
            </Link>
            <div className="flex-center">
              <Link to="/login" className="text-sm text-white">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
