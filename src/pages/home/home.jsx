import React from "react";
import Nav from "../../components/Nav/Nav";
import Button from "../../components/buttons/button";
import Input from "../../components/input/input";
import Footer from "../../components/footer/footer";
import Prompt from "../../components/Prompt";
import WhyCauldron from "../../components/whyCauldron";
import Background from "../../components/Background";
import Cauldron from "../../assets/Cauldron.svg";
import Sparkle from "../../assets/Sparkle.svg";
import OpenAi from "../../assets/OpenAi.svg";

export default function Home() {
  return (
    <>
      <Nav />
      <Background />
      <div className="flex h-full min-h-screen flex-col bg-gradient-to-t from-[#0B0C0F] to-[#0F1014] pt-[100px]">
        <div className="flex-center flex-col gap-12 px-4">
          <div className="flex-center flex-col gap-4">
            <Button
              title="Our Waitlisting has started"
              borderRadius="32px"
              color="#0071E3"
            />
            <h1 className="h-20 bg-gradient-to-t from-[#9dabc1] to-white bg-clip-text text-3xl font-semibold tracking-tight text-transparent shadow-lg xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Faceless Video Engine
            </h1>
          </div>
          <Input />
          <div className="wrapper flex-center relative h-[600px]">
            <div className="flex-center rounded-2xl border-2 border-[hsl(210,100%,60%)] bg-gradient-to-t from-[#0071E3] to-[hsl(210,100%,60%)] p-4">
              <img src={Cauldron} alt="Cauldron" />
            </div>
            <div className="flex-center absolute bottom-[80%] right-[20%] md:right-[25%] lg:right-[32%]">
              <img src={Sparkle} alt="Sparkle" />
              <p className="text-[#E5F1FD]">Ideas</p>
            </div>
            <div className="flex-center absolute bottom-[90%] left-[15%] md:left-[20%] lg:left-[27%]">
              <img src={OpenAi} alt="Sparkle" />
              <p className="text-[#E5F1FD]">Prompt</p>
            </div>
          </div>
        </div>
      </div>
      <WhyCauldron  />
      <div className="w-full flex-grow bg-gradient-to-t from-[#0B0C0F] to-[#0F1014]">
        <Prompt />
      </div>
      <Footer />
    </>
  );
}
