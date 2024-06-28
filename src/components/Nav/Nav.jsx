import React from "react";
import { Link } from "react-router-dom";
import Cauldron from "../../assets/Cauldron.svg";

const Nav = () => {
  const maskStyle = {
    maskImage: "linear-gradient(to top, transparent 0%, white 70%)",
    WebkitMaskImage: "linear-gradient(to top, transparent 0%, white 70%)",
    zIndex: "20",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "#0F101491",
    backdropFilter: "blur(6px)",
  };

  return (
    <>
      <div className="warpper fixed z-20 h-[60px] w-full border-[#414141]">
        <div className="flex-center relative m-auto h-full w-full max-w-[1400px] py-3">
          <div style={maskStyle} />
          <div className="flex-between z-40 w-full px-4 lg:px-8">
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
