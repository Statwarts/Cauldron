import React, { useRef, useEffect } from "react";
import PromptCard from "./PromptCard";
import Marquee from "react-fast-marquee";

export default function Prompt() {
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
      src: "https://www.youtube.com/shorts/u_zjP8sjHlA",
    },
    {
      number: 2,
      prompt:
        "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/shorts/PD6Ayhv-jqU",
    },
    {
      number: 3,
      prompt:
        "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/shorts/96jj5K43HBQ",
    },
    {
      number: 4,
      prompt:
        "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/shorts/OxOKbPeFv9o",
    },
  ];

  return (
    <div className="wrapper flex flex-col px-4">
      <div className="flex flex-col px-2 md:px-20">
        <p className="py-2 font-[300] text-[#E3E7EA]">
          The Cauldron can produce a variety of content, from short clips to
          extended videos, all while upholding exceptional visual quality and
          adhering to user prompts.
        </p>
        <p className="py-2 font-[300] text-[#E3E7EA]">
          Explore a selection of our latest collections.
        </p>
        <div className="h-[1px] bg-[#3A3F45]"></div>
      </div>

      <div className="w-full overflow-hidden px-2 py-2 md:px-20">
        <Marquee
          speed={40}
          gradient={true}
          gradientColor="#0e0f12"
          gradientWidth={50}
          pauseOnHover={true}
        >
          {promptData.map((data, index) => (
            <div key={index} className="inline-block py-2 pl-3">
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
