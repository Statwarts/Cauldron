import React, { useState, useEffect } from "react";
import Send from "../../assets/send.svg";
import { animate, motion } from "framer-motion";

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
      },1000);
    }
  }, [messageToUser]);
  const handleSubmit = () => {
    if(userEmail == ""){
        return
    }
    if (!checkEmail(userEmail)) {
      setMessageToUser("Invalid Email");
      return;
    }
    console.log(userEmail);
    setMessageToUser("Joined waitlist");
  };
  return (
    <div className="rounded-3xl p-1 overflow-hidden border-[1px] w-96 flex justify-between bg-[rgb(4,1,21,0.1)] border-blue-500 glow shadow-sm shadow-black">
      <input
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        type="email"
        placeholder={messageToUser}
        className="outline-none p-1 pl-4 w-full bg-transparent text-white cursor-text"
      />
      <motion.div
        className="pr-2 ml-2 flex items-center"
        onTap={() => {
            userEmail &&
          setTapped(true);
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
