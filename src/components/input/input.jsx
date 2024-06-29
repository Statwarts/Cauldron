import React, { useState, useEffect } from "react";
import {Send} from "../../assets/image";
import { animate, motion } from "framer-motion";
import store from "../../../store";
import { Link } from "react-router-dom";
const checkEmail = (email) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};

export default function Input() {
  const [tapped, setTapped] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [messageToUser, setMessageToUser] = useState("Enter your mail");

  useEffect(() => {
    if (tapped) {
      setTimeout(() => {
        setTapped(false);
      }, 500);
    }
  }, [tapped]);

  useEffect(() => {
    setUserEmail("");

    if (messageToUser === "Joined waitlist") {
      setTimeout(() => {
        setMessageToUser("Enter your mail");
      }, 5000);
    }
    if (messageToUser == "Invalid Email") {
      setTimeout(() => {
        setMessageToUser("Enter a valid Email");
      }, 1000);
    }
  }, [messageToUser]);
  
  const handleSubmit = () => {
    if (userEmail == "") {
      return;
    }
    if (!checkEmail(userEmail)) {
      setMessageToUser("Invalid Email");
      return;
    }
    console.log(userEmail);
    window.localStorage.setItem("email", userEmail);
    
    setMessageToUser("Joining waitlist");
    window.location.href = "/register";
  };
  return (
    <div className="glow flex w-64 md:w-80 lg:w-96 justify-between overflow-hidden rounded-3xl border-[1px] border-[hsl(210,100%,45%)] bg-[rgb(4,1,21,0.1)] p-1 shadow-md shadow-black transition-all duration-300">
      <input
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        type="email"
        placeholder={messageToUser}
        className="w-full cursor-text bg-transparent p-1 pl-4 text-white outline-none"
      />
      <motion.div
        className="ml-2 flex items-center pr-2"
        onTap={() => {
          userEmail && setTapped(true);
        }}
        transition={{ duration: 0.3 }}
        animate={
          tapped
            ? { scale: 1.1, translateX: 25, translateY: -25 }
            : { scale: 1, duration: 1, x: 0, y: 0 }
        }
        whileHover={{
          color: "rgb(59, 130, 246)",
        }}

        //   whileHover={{
        //       scale: 1.1,
        //   }}
      >
        
        <button
          className="flex items-center"
          onClick={() => {
            handleSubmit();
          }}
        >
          <img src={Send} alt="send" className="scale-125" />
        </button>
      </motion.div>
    </div>
  );
}
