import register from "../../../Firebase/firestore";
import { useEffect, useState } from "react";
import store from "../../../store";
import "../../../Firebase/firebaseConfig";
import Notification from "../../components/notification/notification";
import { Cauldron } from "../../assets/image";
import Nav from "../../components/Nav/Nav";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Confetti from "react-confetti";
import Modal from "../../components/modal";

export default function Register() {
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(window.localStorage.getItem("email"));
  const [whyUse, setWhyUse] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(true);

  const handleSubmit = async () => {
    if (!email) {
      setShowNotification(2);
      return;
    }
    if (!name) {
      setShowNotification(1);
      return;
    }

    const success = await register(email, name, phone, whyUse);
    if (success) {
      setShowSuccessModal(true);
    }
  };


  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
  }, [showNotification]);

  return (
    <>
      <Nav />
      <div className="flex h-full min-h-screen flex-col bg-gradient-to-t from-[#0B0C0F] to-[#0F1014] pt-[70px]">
        <div className="flex-center flex-col gap-4 px-4">
          <img
            src={Cauldron}
            alt="Cauldron"
            className="m-auto w-[70px] sm:m-0 lg:w-[85px]"
          />
          <p className="mb-10 max-w-md pl-10 pr-10 text-center text-xl text-[rgb(188,207,226)] lg:text-2xl">
            Sign up for the <span className="git">waitlist</span> and be the
            first to{" "}
            <span className="instrument-serif-regular-italic">try</span>{" "}
            Cauldron!
          </p>
          <input
            required={true}
            type="text"
            placeholder="mail@gmail.com"
            value={email}
            className="w-[400px] rounded-full border border-[#232527] bg-[#121314b7] p-2 px-4 font-[300] text-[#e3e7eac3] outline-none placeholder:text-[#e3e7ea73] focus:border-[#2f3134] xs:w-[300px] md:w-[500px] xl:w-[600px]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required={true}
            type="text"
            placeholder="Name"
            value={name}
            className="w-[400px] rounded-full border border-[#232527] bg-[#121314b7] p-2 px-4 font-[300] text-[#e3e7eac3] outline-none placeholder:text-[#e3e7ea73] focus:border-[#2f3134] xs:w-[300px] md:w-[500px] xl:w-[600px]"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="w-[400px] xs:w-[300px] md:w-[500px] xl:w-[600px]">
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={setPhone}
              placeholder="Phone Number (Optional)"
              inputStyle={{
                width: "100%",
                borderRadius: "50px",
                border: "1px solid #232527",
                backgroundColor: "#121314b7",
                color: "#e3e7eac3",
                outline: "none",
              }}
              dropdownStyle={{
                borderRadius: "10px",
                border: "1px solid #232527",
                backgroundColor: "#121314b7",
                color: "#e3e7eac3",
              }}
              buttonStyle={{
                backgroundColor: "#121314b7",
                border: "none",
              }}
              containerClass="phone-input-container"
              inputClass="phone-input"
              buttonClass="phone-input-button"
              dropdownClass="phone-input-dropdown"
            />
          </div>
          <input
            type="text"
            value={whyUse}
            placeholder="Why do you want to use Cauldron? (Optional)"
            className="w-[400px] rounded-full border border-[#232527] bg-[#121314b7] p-2 px-4 font-[300] text-[#e3e7eac3] outline-none placeholder:text-[#e3e7ea73] focus:border-[#2f3134] xs:w-[300px] md:w-[500px] xl:w-[600px]"
            onChange={(e) => setWhyUse(e.target.value)}
          />
          <div
            className="w-[400px] xs:w-[300px] md:w-[500px] xl:w-[600px] cursor-pointer rounded-full border-2 border-[hsl(210,100%,60%)] bg-gradient-to-t from-[#0071E3] to-[hsl(210,100%,60%)] p-2 text-center text-white transition-all duration-300 hover:brightness-105"
            onClick={handleSubmit}
          >
            Register
          </div>
        </div>
        <Notification
          isModalVisible={showNotification === 1}
          text="Please enter your Name!!"
          textColor="#e3e7eac3"
        />
        <Notification
          isModalVisible={showNotification === 2}
          text="Please enter your Email!!"
          textColor="#e3e7eac3"
        />
        <Notification
          isModalVisible={showNotification === 3}
          text="Please enter why you want to use Cauldron!!"
          textColor="#e3e7eac3"
        />

        {showSuccessModal && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={50}
            friction={1.0}
          />
        )}
      </div>
    </>
  );
}