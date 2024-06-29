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
      src: "https://www.youtube.com/embed/PD6Ayhv-jqU",
    },
    {
      number: 2,
      prompt:
        "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/R88PLJ1ikfM",
    },
    {
      number: 3,
      prompt:
        "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/ZxhzXUz7gF8",
    },
    {
      number: 4,
      prompt:
        "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/PD6Ayhv-jqU",
    },
  ];

  return (
    <div className="wrapper flex flex-col px-4">
      <div className="flex flex-col px-20">
        <p className="py-2 text-[#E3E7EA] font-[300]">
          The Cauldron can produce a variety of content, from short clips to
          extended videos, all while upholding exceptional visual quality and
          adhering to user prompts.
        </p>
        <p className="py-2 text-[#E3E7EA] font-[300]">
          Explore a selection of our latest collections.
        </p>
        <div className="h-[1px] bg-[#3A3F45]"></div>
      </div>

      <div className="w-full overflow-hidden px-20 py-2">
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
