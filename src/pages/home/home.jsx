import React from "react";
import Nav from "../../components/Nav/Nav";

export default function Home() {
    return (
        <>
            {/* gradient bg */}
            <div className="bg-gradient-to-t from-[#0F1014] to-[#121212] h-screen w-full">
                <Nav />
                <div className="flex-center h-full">
                    <div className="text-white text-4xl">Home</div>
                </div>
            </div>
        </>
    );
}
