import React from "react";
import { Link } from "react-router-dom";
import Input from "../input/input";

import { Discord, Github, X, Cauldron } from "../../assets/image";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <>
      <div className="relative overflow-hidden bg-[rgb(11,11,14)] pt-10 text-white">
        <div className="absolute top-0 z-0 h-[1px] w-full bg-gradient-to-r from-[#0b0b0e] via-[#FEFEFE] to-[#0b0b0e]"></div>
        <div className="absolute -bottom-[100%] left-1/2 z-0 h-[375px] w-[375px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0071E3] blur-[200px] md:-bottom-[150%]"></div>
        <div className="mb-20 flex flex-wrap-reverse justify-between">
          <div className="m-auto flex flex-col justify-center gap-2 pl-2 pt-20 md:pl-10 md:pt-0 lg:ml-32 lg:justify-normal lg:pl-0">
            <img
              src={Cauldron}
              alt="Cauldron"
              className="m-auto w-[70px] sm:m-0 lg:w-[85px]"
            />
            <div className="bg-gradient-to-b from-white to-[rgb(207,231,255)] bg-clip-text font-semibold text-transparent">
              <p className="text-center font-[UncutSans] text-5xl md:text-balance md:text-6xl">
                Cauldron
              </p>
            </div>
            <p className="mb-10 text-center text-xs text-[rgb(227,231,234,0.7)] md:text-balance md:text-sm">
              © 2024 Cauldron All rights reserved.
            </p>
            <div className="m-auto flex items-center gap-5 md:m-0">
              <Link to="https://discord.gg/VDrzngkvZ2" target="_blank">
                <img
                  src={Discord}
                  alt="Discord"
                  className="w-8 opacity-80 transition-all hover:opacity-100"
                />
              </Link>
              <Link to="https://x.com/Cauldron_live" target="_blank">
                <img
                  src={X}
                  alt="X"
                  className="w-7 opacity-80 transition-all hover:opacity-100"
                />
              </Link>
            </div>
          </div>
          <div className="m-auto mt-16 lg:mr-32">
            <p className="mb-10 max-w-md pl-10 pr-10 text-center text-xl text-[rgb(188,207,226)] lg:text-2xl">
              Register for the <span className="git">waitlist</span> and be the
              first to{" "}
              <span className="instrument-serif-regular-italic">try</span>{" "}
              Cauldron!
            </p>
            <div className="flex justify-center">
              <Input />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-10 pb-6 text-sm text-[rgb(227,231,234,0.7)]">
          <motion.div
            whileHover={{
              color: "#0071E3",
              transition: { duration: 0.1 },
            }}
          >
            <Link to="/termsofservice">Terms of Service</Link>
          </motion.div>
          <motion.div
            whileHover={{
              color: "#0071E3",
              transition: { duration: 0.1 },
            }}
          >
            <Link to="/privacypolicy">Privacy Policy</Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
