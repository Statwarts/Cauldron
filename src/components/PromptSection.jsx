import React, { useRef, useEffect } from "react";
import PromptCard from "./PromptCard";
import Marquee from "react-fast-marquee";

export default function PromptSection() {
  const scrollContainer = useRef(null);

  const handleMouseEnter = () => {
    scrollContainer.current.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    scrollContainer.current.style.animationPlayState = "running";
  };

  const promptData = [
    {
      number: 1,
      prompt:
        "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/5lhGkQ_0sp4",
    },
    {
      number: 2,
      prompt:
        "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/PD6Ayhv-jqU",
    },
    {
      number: 3,
      prompt:
        "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/96jj5K43HBQ",
    },
    {
      number: 4,
      prompt:
        "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/OxOKbPeFv9o",
    },
  ];

  return (
    <div className="relative flex w-full flex-col gap-8 overflow-hidden bg-[#0b0b0e] px-4 xl:px-12">
      <div className="absolute top-0 z-0 h-[1px] w-full bg-gradient-to-r from-[#0b0b0e] via-[#FEFEFE] to-[#0b0b0e]"></div>
      <div className="absolute -top-1/2 left-1/2 z-0 h-[675px] w-[675px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0071E3] blur-[200px]"></div>
      <div className="z-30 flex flex-col gap-6 px-2 pt-12 md:px-20">
        <p className="text-[18px] font-[300] text-[#E3E7EA] opacity-90">
          The Cauldron can produce a variety of content, from short clips to
          extended videos, all while upholding exceptional visual quality and
          adhering to user prompts.
        </p>
        <p className="z-30 py-2 font-[300] text-[#E3E7EA] opacity-80">
          Explore a selection of our latest collections.
        </p>
      </div>
      <div className="h-[1px] bg-[#3A3F45] px-2 md:mx-20"></div>

      <div className="z-30 w-full overflow-hidden px-2 py-2 md:px-20">
        <Marquee
          className="z-30"
          speed={40}
          gradient={true}
          gradientColor="#0b0b0e"
          gradientWidth={80}
          pauseOnHover={true}
        >
          {promptData.map((data, index) => (
            <div key={index} className="z-30 inline-block py-2 pl-3">
              <PromptCard
                number={data.number}
                prompt={data.prompt}
                src={data.src}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
