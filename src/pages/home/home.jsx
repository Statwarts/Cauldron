import React from "react";
import Nav from "../../components/Nav/Nav";
import Button from "../../components/buttons/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="w-full">
          <Nav />
        </div>
        <div className="flex-grow flex justify-center items-center">
          <Button title="Our Waitlisting has started" borderRadius="32px" color="#1D1D1D" />
        </div>
      </div>
    </>
  );
}
