import React from "react";
import { Link } from "react-router-dom";
import Input from "../input/input";

import { Instagram,Github,Linkedin, Cauldron } from "../../assets/image";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <>
      <div className="bg-[rgb(11,11,14)] text-white pt-10">
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
              <Link to="">
                <img
                  src={Instagram}
                  alt="Instagram"
                  width={"32px"}
                  className="drop-shadow-socialMedia"
                />
              </Link>
              <Link to="https://github.com/Statwarts">
                <img
                  src={Github}
                  alt="Github"
                  width={"32px"}
                  className="drop-shadow-socialMedia"
                />
              </Link>
              <Link to="">
                <img
                  src={Linkedin}
                  alt="Linkedin"
                  width={"32px"}
                  className="drop-shadow-socialMedia"
                />
              </Link>
            </div>
          </div>
          <div className="m-auto mt-16 lg:mr-32">
            <p className="mb-10 max-w-md pl-10 pr-10 text-center text-xl text-[rgb(188,207,226)] lg:text-2xl">
              Sign up for the <span className="git">waitlist</span> and be the
              first to try Cauldron!
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
            }}
          >
            <Link to="/termsofservice">Terms of Service</Link>
          </motion.div>
          <motion.div
            whileHover={{
              color: "#0071E3",
            }}
          >
            <Link to="/privacypolicy">Privacy Policy</Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
