import React from "react";
import Nav from "../../components/Nav/Nav";
import Button from "../../components/buttons/button";
import Input from "../../components/input/input";
import Footer from "../../components/footer/footer";
import Prompt from "../../components/Prompt";

export default function Home() {
  return (
    <>
    
      <Nav />
      <div className="flex min-h-screen flex-col bg-gradient-to-t from-[#0B0C0F] to-[#0F1014] pt-[100px]">
        <div className="flex-center flex-col gap-12 px-4">
          <div className="flex-center flex-col gap-4">
            <Button
              title="Our Waitlisting has started"
              borderRadius="32px"
              color="#0071E3"
            />
            <h1 className="h-20 bg-gradient-to-t from-[#9dabc1] to-white bg-clip-text text-3xl font-semibold tracking-tight text-transparent xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Faceless Video Engine
            </h1>
          </div>
          <Input />
        </div>
      </div>
      <div className="w-full flex-grow bg-gradient-to-t from-[#0B0C0F] to-[#0F1014]">
        <Prompt />
      </div>
      
      <Footer />
    </>
  );
}
