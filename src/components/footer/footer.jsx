import React from "react";
import { Link } from "react-router-dom";
import Cauldron from "../../assets/Cauldron.svg";
import Input from "../input/input";
import Instagram from "../../assets/instagram.svg";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
export default function Footer() {
    return (
        <>
        <div className="bg-[rgb(11,11,14)] text-white">
            <div className="flex flex-wrap-reverse justify-between mb-20">
                <div className="flex-col flex  gap-2 m-auto lg:ml-32 lg:justify-normal justify-center lg:pt-0 pt-20 sm:pl-10 lg:pl-0">
                    <img src = {Cauldron} alt = "Cauldron" width={"85px"} className="m-auto md:m-0" />
                    <div className="text-transparent font-semibold bg-clip-text bg-gradient-to-b from-white to-[rgb(207,231,255)]">
                    <p className=" md:text-6xl text-4xl text-center md:text-balance font-[UncutSans]">Cauldron</p>
                    </div>
                    <p className="text-[rgb(227,231,234,0.7)] text-sm mb-10 text-center md:text-balance">© 2024 Cauldron All rights reserved.</p>
                    <div className="flex gap-5 items-center m-auto lg:m-0">
                        <Link to = "">
                        <img src = {Instagram} alt = "Instagram" width={"32px"} className=" drop-shadow-socialMedia" />
                        </Link>
                        <Link to = "https://github.com/Statwarts">
                        <img src = {Github} alt = "Github" width={"32px"} className=" drop-shadow-socialMedia"/>
                        </Link>
                        <Link to = "">
                        <img src = {Linkedin} alt = "Linkedin" width={"32px"} className=" drop-shadow-socialMedia"/>
                        </Link>
                    </div>
                </div>
                <div className=" mt-16 m-auto lg:mr-32">
                    <p className="mb-10 text-center text-[rgb(188,207,226)] text-xl lg:text-2xl pl-10 pr-10 max-w-md">Sign up for the <span>waitlist</span>  and be the first to try Cauldron!</p>
                    <div className="flex justify-center"><Input /></div>
                </div>
            </div>
            <div className="flex justify-center gap-10 pb-6 text-[rgb(227,231,234,0.7)] text-sm">
                <Link to= "/">Terms of Service</Link>
                <Link to= "/">Privacy Policy</Link>
            </div>
        </div>
        </>
    );
}