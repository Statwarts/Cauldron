import React, { useEffect, useRef } from "react";
import Nav from "../../components/Nav/Nav";
import Button from "../../components/buttons/button";
import Input from "../../components/input/input";
import Footer from "../../components/footer/footer";
import Prompt from "../../components/Prompt";
import WhyCauldron from "../../components/whyCauldron";
import Background from "../../components/Background";
import {
  Cauldron,
  Sparkle,
  OpenAi,
  youtube,
  reels,
  ytshorts,
} from "../../assets/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
export default function Home() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0, duration: 0.5 });
    }
  }, [isInView]);
  return (
    <>
      {/* <Nav /> */}
      <Background />
      <div className="flex h-full min-h-screen flex-col bg-gradient-to-t from-[#0B0C0F] to-[#0F1014] pt-[100px]">
        <div className="flex-center flex-col gap-12 px-4">
          <div className="flex-center flex-col gap-4">
            <Button
              title="Our Waitlisting has started"
              borderRadius="32px"
              color="#0071E3"
            />
            <h1 className="h-20 bg-gradient-to-t from-[#9dabc1] to-white bg-clip-text text-center text-3xl font-semibold tracking-tight text-transparent shadow-lg xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Faceless Video Engine
            </h1>
            <p className="text-2xl text-[#BCCFE2]">
              {" "}
              <span className="instrument-serif-regular-italic">
                Automate
              </span>{" "}
              and{" "}
              <span className="instrument-serif-regular-italic">dominate</span>{" "}
              YouTube without ever showing your face!
            </p>
          </div>
          <Input />
          <div className="wrapper flex-center relative flex h-[600px] flex-col">
            <div className="flex-center mt-40 rounded-[32px] border-2 border-[hsl(210,100%,60%)] bg-gradient-to-t from-[#0071E3] to-[hsl(210,100%,60%)] p-5">
              <img src={Cauldron} alt="Cauldron" width={"80px"} />
            </div>
            <div className="flex-center absolute bottom-[80%] right-[20%] md:right-[25%] lg:right-[32%]">
              <img src={Sparkle} alt="Sparkle" width={"20px"} />
              <p className="pl-1 text-[#E5F1FD]">Ideas</p>
            </div>
            <div className="flex-center absolute bottom-[90%] left-[15%] md:left-[20%] lg:left-[27%]">
              <img src={OpenAi} alt="Sparkle" width={"20px"} />
              <p className="pl-1 text-[#E5F1FD]">Prompt</p>
            </div>
            <div className="mb-10 mt-16 flex w-40 flex-col lg:mb-20">
              <motion.img
                ref={ref}
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 1.2 }}
                src={youtube}
                alt="youtube"
                className="w-12 self-start"
              />
              <motion.img
                ref={ref}
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 2.2 }}
                src={reels}
                alt="youtube"
                className="w-12 self-end"
              />
              <motion.img
                ref={ref}
                initial={{ opacity: 0 }}
                transition={{ duration: 3.2 }}
                animate={controls}
                src={ytshorts}
                alt="youtube"
                className="ml-4 mt-4 w-12 self-start"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <WhyCauldron />
      <div className="w-full flex-grow bg-gradient-to-t from-[#0B0C0F] to-[#0F1014]">
        <Prompt />
      </div>
      <Footer />
    </>
  );
}
