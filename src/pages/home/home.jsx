import React from "react";
import Nav from "../../components/Nav/Nav";
import Button from "../../components/buttons/button";
import Input from "../../components/input/input";
export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[rgb(4,1,21)] ">
        <div className="w-full">
          <Nav />
        </div>
        <div className="flex-grow flex justify-center items-center px-4">
          <Button
            title="Our Waitlisting has started"
            borderRadius="32px"
            color="#1D1D1D"
          />
        </div>
        <div className="w-full flex sm:flex-row flex-col  gap-2 items-center justify-center">
          <h1 className="text-white font-bold text-[42px] leading-[48px] lg:text-[48px] lg:leading-[60px] xl:text-[58px] xl:leading-[74px]">Faceless Video</h1>
          <h1 className="text-white font-bold text-[42px] leading-[48px] lg:text-[48px] lg:leading-[60px] xl:text-[58px] xl:leading-[74px">Engine</h1>
        </div>
        <div className="flex-grow flex justify-center items-center px-4">
          <Input />
        </div>
      </div>
    </>
  );
}
