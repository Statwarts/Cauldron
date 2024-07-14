import { whyIcon1, whyIcon2, whyIcon3 } from "../assets/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function WhyCauldron() {
  const [isHovering, setIsHovering] = useState([false, false, false]);
  const numOfLines = (text) => {
    if (text.length > 100) {
      return " md:max-w-[400px]";
    }
    return " md:max-w-[280px]";
  };
  const data = [
    {
      text: "Faceless videos allow for a consistent visual style and branding that isn’t reliant on the creator’s appearance, which can be more scalable in the long term.",
      src: "../src/assets/images/Cam.png",
      name: "Cam",
      bg: "/assets/images/Bg1.png",
    },
    {
      text: "Change voices and choose voices that best match their brand or the tone of the content.",
      src: "../src/assets/images/Mic.png",
      name: "Mic",
      bg: "/assets/images/Bg2.png",
    },
    {
      text: "Significantly reduce expenses related to hiring videographers and editors.",
      src: "../src/assets/images/Wallet.png",
      name: "Wallet",
      bg: "/assets/images/Bg3.png",
    },
    {
      text: "Customizable subtitles ensure that videos are accessible to a broader audience, including those who are deaf or hard of hearing, and can enhance viewer engagement.",
      src: "../src/assets/images/Comment.png",
      name: "Comment",
      bg: "/assets/images/Bg4.png",
    },
  ];
  const batchProcessingData = [
    {
      imgSrc: whyIcon1,
      text: "Streamline the video production process, and focus more on the content rather than the technical aspects of video creation.",
    },
    {
      imgSrc: whyIcon2,
      text: "Producing consistent quality and style across all videos, which helps in maintaining a cohesive brand image.",
    },
    {
      imgSrc: whyIcon3,
      text: "Easily scale the production, creating more content in less time and potentially increasing their reach and engagement.",
    },
  ];

  return (
    <div className="bg-[rgb(11,11,14)] px-6 text-white">
      <div className="m-auto max-w-[700px] pb-40  text-[#c1c9cf]">
        <h1 className="text-4xl font-semibold text-[#F1F7FC]">
          Reduced Production Costs
        </h1>
        <p className="tetx-[#C1C9CF] mb-20 max-w-3xl">
          Efficient video production with faceless content ensures
          cost-effectiveness and scalability, driven by a prompt.
        </p>
        <div className="flex flex-wrap justify-center text-[rgb(184,193,199,0.8)] sm:justify-between">
          {data.map(({ text, src, name, bg }, index) => (
            <React.Fragment key={index}>
              <div className={"mb-4 text-pretty" + numOfLines(text)}>
                <div className="inner-shadow relative mb-1 flex h-[150px] items-center justify-center overflow-hidden rounded-2xl border border-[#2A2A2A66]">
                  <img
                    className="z-10 scale-50 select-none"
                    src={src}
                    alt={name}
                    draggable="false"
                  />
                  <img
                    className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 scale-[45%] select-none"
                    src={bg}
                    alt={name}
                    draggable="false"
                  />
                </div>
                <p className="pl-2 font-[400] leading-5 text-[#b8c1c7cc]">
                  {text}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="m-auto max-w-[960px] items-center pb-40 text-[rgb(193,201,207)]">
        <h1 className="pl-5 text-4xl font-semibold lg:pl-0">
          Batch Processing
        </h1>
        <p className="mb-20 max-w-3xl pl-5 lg:max-w-[900px] lg:pl-0">
          The ability to create multiple videos in a short amount of time is
          particularly useful for creators who need to maintain a consistent
          posting schedule.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {batchProcessingData.map(({ imgSrc, text }, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-start justify-center gap-2 text-pretty rounded-3xl bg-[#1212143b] p-4 transition-all duration-300 hover:bg-[#121214b7]">
                <motion.img
                  onHoverStart={() => {
                    const newHovering = [...isHovering];
                    newHovering[index] = true;
                    setIsHovering(newHovering);
                  }}
                  onHoverEnd={() => {
                    const newHovering = [...isHovering];
                    newHovering[index] = false;
                    setIsHovering(newHovering);
                  }}
                  src={imgSrc}
                  alt="icon"
                  className="m-auto w-[96px]"
                  animate={
                    isHovering[index]
                      ? {
                          // filter:
                          // "drop-shadow(0px 5px 10px rgba(255,255,255,0.1))",
                        }
                      : {
                          // filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.1))",
                        }
                  }
                  transition={{ duration: 0.5 }}
                  exit={{ filter: "" }}
                />

                <div className="h-[1px] w-full bg-[#3A3F45]"></div>
                <p className="max-w-[500px] text-[14px] text-[rgb(184,193,199,0.8)] md:max-w-[300px]">
                  {text}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
