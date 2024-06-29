import React, { useRef, useEffect } from "react";
import PromptCard from "./PromptCard";

export default function Prompt() {
  const scrollContainer = useRef(null);

  const handleMouseEnter = () => {
    scrollContainer.current.classList.add("paused");
  };

  const handleMouseLeave = () => {
    scrollContainer.current.classList.remove("paused");
  };

  const promptData = [
    {
      number: 1,
      prompt: "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/PD6Ayhv-jqU"
    },
    {
      number: 2,
      prompt: "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/R88PLJ1ikfM"
    },
    {
      number: 3,
      prompt: "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/ZxhzXUz7gF8"
    },
    {
      number: 4,
      prompt: "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/PD6Ayhv-jqU"
    }
  ];

  useEffect(() => {
    const container = scrollContainer.current;
    const content = container.innerHTML;
    container.innerHTML += content;
    container.style.animationDuration = `${promptData.length * 10}s`;
  }, [promptData.length]);

  return (
    <div className="wrapper flex flex-col px-4">
      <div className="flex flex-col">
        <p className="py-2 text-white">
          The Cauldron can produce a variety of content, from short clips to
          extended videos, all while upholding exceptional visual quality and
          adhering to user prompts.
        </p>
        <p className="py-2 text-white">
          Explore a selection of our latest collections.
        </p>
        <div className="h-0.5 bg-[#3A3F45]"></div>
      </div>

      <div className="w-full overflow-hidden py-2">
        <div
          className="animate-scroll flex items-center whitespace-nowrap"
          ref={scrollContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {promptData.map((data, index) => (
            <div
              key={index}
              className="inline-block w-full px-3 py-2 sm:w-3/4 xl:w-1/2 2xl:w-1/2"
            >
              <PromptCard
                number={data.number}
                prompt={data.prompt}
                src={data.src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
