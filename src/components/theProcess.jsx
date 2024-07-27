import { whyIcon1, whyIcon2, whyIcon3 } from "../assets/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Faceless,
  Mic,
  Wallet,
  Customize,
  Bg1,
  Bg2,
  Bg3,
  Bg4,
  Idea,
  Generate,
  Publish,
} from "../assets/image";
export default function theProcess() {
  const data = [
    {
      title: "Idea",
      description:
        "write the prompt or script for your video. This will form the foundation of your content.",
      icon: Idea,
    },
    {
      title: "Generate",
      description:
        "With a single click, Cauldron will generate a video based on your input. Review the generated.",
      icon: Generate,
    },
    {
      title: "Publish",
      description:
        "Once you're satisfied with your video, upload it to your YouTube channel and share it with your audience.",
      icon: Publish,
    },
  ];

  return (
    <div className="bg-[rgb(11,11,14)] px-1 text-white md:px-6">
      <div className="m-auto flex flex-col items-center justify-center pb-40 text-[#c1c9cf]">
        <div className="flex flex-col items-center gap-6">
         
            <h3 className="gradient-border flex-center inline-flex rounded-full bg-gradient-to-t from-[#0c1022] to-[#0b0b0e] px-4 py-2 text-sm font-[500]">
              The Process
            </h3>
          <h1 className="max-w-lg text-center text-3xl font-semibold text-[#F1F7FC] md:text-4xl">
            Three Steps to Convert Your <br />
            Ideas to Videos
          </h1>
          <p className="mb-10 max-w-3xl text-center font-[400] text-[#C1C9CF]">
            Follow these simple steps to transform your ideas into engaging
            videos.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 text-[rgb(184,193,199,0.8)] md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <div
              className="flex h-[200px] w-full flex-col items-start justify-between rounded-[24px] bg-gradient-to-tr from-[#ffffff09] via-[#fff0] to-[#fff0] px-6 py-8 md:w-[373px]"
              key={index}
            >
              <img src={item.icon} alt={item.title} />
              <h1 className="text-lg font-[500] text-[#F7F8F9]">
                {item.title}
              </h1>
              <p className="text-base font-[400] text-[#7F8796]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
