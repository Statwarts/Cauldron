import React from "react";
import Cauldron from "../../assets/cauldron.png";

export default function Home() {
    return (
        <>
            <div className="bg-black w-full">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex ">
                            <div><img src={Cauldron} alt="Cauldron" className="w-10 h-10" /></div>
                            <div><p className="text-white">Cauldron</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
