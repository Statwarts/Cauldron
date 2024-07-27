import React, { useRef, useEffect } from "react";
import PromptCard from "./PromptCard";
import Marquee from "react-fast-marquee";
import PromptVideoCard from "./PromptVideoCard";

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
        "Create me a summary video for the movie John wick Chapter 3. The video should be 30 seconds long and should include the best action scenes from the movie.",
      src: "https://www.youtube.com/embed/5lhGkQ_0sp4",
    },
    {
      number: 2,
      prompt:
        "Make a video of about 40 seconds about comparison between Goku and Gojo . The ending should be left to the viewers to assume who is stronger. Ask them to comment their opinion.",
      src: "https://www.youtube.com/embed/fp2K7uDFjPc",
    },
    {
      number: 3,
      prompt:
        "Create a video of 30-40 seconds about dbz broly about  having a different concept than the original movies. The video should be engaging and should be able to keep the viewers hooked.",
      src: "https://www.youtube.com/embed/wyduIWpa20w",
    },
    {
      number: 4,
      prompt:
        "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "https://www.youtube.com/embed/OxOKbPeFv9o",
    },
  ];

  const videoPromptData = [
    {
      number: 1,
      prompt:
        "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "",
    },
    {
      number: 2,
      prompt:
        "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "",
    },
    {
      number: 3,
      prompt:
        "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "",
    },
    {
      number: 4,
      prompt:
        "The ability to create multiple videos in a short amount of time is particularly useful for creators who need to maintain a consistent posting schedule.",
      src: "",
    },
  ];

  return (
    <div className="bg-[#0b0b0e]">
      <div className="wrapper relative flex w-full flex-col gap-8 overflow-hidden bg-[#0b0b0e] px-4 xl:px-12">
        <div className="absolute top-0 z-0 h-[1px] w-full bg-gradient-to-r from-[#0b0b0e] via-[#FEFEFE] to-[#0b0b0e]"></div>
        <div className="absolute -top-[10%] left-1/2 z-0 h-[375px] w-[375px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0071E3] blur-[200px]"></div>
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
        <div className="z-30 flex flex-col gap-6 px-2 pt-12 md:px-20">
          <p className="text-[18px] font-[300] text-[#E3E7EA] opacity-90">
            We have also uploaded these shorts on our Youtube and Instagram
            platforms and saw varied outcomes - the views for these shorts
            surpassed 10,000 within the first day.
          </p>
          <p className="z-30 py-2 font-[300] text-[#E3E7EA] opacity-80">
            The long form video segment will be available shortly.
          </p>
        </div>
        <div className="z-30 w-full overflow-hidden px-2 py-2 md:px-20">
          <Marquee
            className="z-30"
            speed={40}
            direction="right"
            gradient={true}
            gradientColor="#0b0b0e"
            gradientWidth={80}
            pauseOnHover={true}
          >
            {videoPromptData.map((data, index) => (
              <div key={index} className="z-30 inline-block py-2 pl-3">
                <PromptVideoCard
                  number={data.number}
                  prompt={data.prompt}
                  src={data.src}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
