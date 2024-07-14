import register from "../../../Firebase/firestore";
import { useEffect, useState } from "react";
import store from "../../../store";
import "../../../Firebase/firebaseConfig";
import Notification from "../../components/notification/notification";
import Nav from "../../components/Nav/Nav";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Confetti from "react-confetti";
import Modal from "../../components/modal";
import Loader from "./Loader";
import { Discord, Github, X, Cauldron } from "../../assets/image";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(window.localStorage.getItem("email"));
  const [whyUse, setWhyUse] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      setShowNotification(2);
      return;
    }
    if (!name) {
      setShowNotification(1);
      return;
    }
    setIsLoading(true);
    const success = await register(email, name, phone, whyUse);
    if (success) {
      setShowSuccess(true);
      setIsLoading(false);
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
      {/* <Nav /> */}
      <div className="flex h-full min-h-screen flex-col items-center justify-start bg-[#0c0b0e] pt-[70px]">
        {isLoading && (
          <div className="pt-32">
            <Loader />
          </div>
        )}
        {!showSuccess && !isLoading && (
          <>
            <div className="flex-center flex-col gap-4 px-4">
              <img
                src={Cauldron}
                alt="Cauldron"
                className="m-auto w-[70px] sm:m-0 lg:w-[85px]"
              />
              <p className="max-w-md pl-10 pr-10 text-center text-xl text-[rgb(188,207,226)] lg:text-2xl">
                Register for the <span className="git">waitlist</span> and be
                the first to{" "}
                <span className="instrument-serif-regular-italic">try</span>{" "}
                Cauldron!
              </p>
              <div className="flex w-[400px] flex-col gap-1 xs:w-[300px] md:w-[500px] xl:w-[600px]">
                <h4 className="pl-2 pt-2 font-[300] text-[#e3e7eac3]">
                  Enter your Email
                </h4>
                <input
                  required={true}
                  type="text"
                  placeholder="mail@gmail.com"
                  value={email}
                  className="w-[400px] rounded-full border border-[#232527] bg-[#121314b7] p-2 px-4 font-[300] text-[#e3e7eac3] outline-none placeholder:text-[#e3e7ea73] focus:border-[#2f3134] xs:w-[300px] md:w-[500px] xl:w-[600px]"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <h4 className="pl-2 pt-2 font-[300] text-[#e3e7eac3]">
                  Enter your Name
                </h4>
                <input
                  required={true}
                  type="text"
                  placeholder="Gourav"
                  value={name}
                  className="w-[400px] rounded-full border border-[#232527] bg-[#121314b7] p-2 px-4 font-[300] text-[#e3e7eac3] outline-none placeholder:text-[#e3e7ea73] focus:border-[#2f3134] xs:w-[300px] md:w-[500px] xl:w-[600px]"
                  onChange={(e) => setName(e.target.value)}
                />
                {/* <h4 className="pl-2 pt-2 font-[300] text-[#e3e7eac3]">
              Enter your phone number (Optional)
            </h4>
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
                borderRadius: "8px",
                border: "1px solid #232527",
                backgroundColor: "#111213",
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
            /> */}
                <h4 className="pl-2 pt-2 font-[300] text-[#e3e7eac3]">
                  Why do you want to use Cauldron?
                </h4>
                <input
                  type="text"
                  value={whyUse}
                  placeholder="I just wanna grow my youtube channel!!"
                  className="w-[400px] rounded-full border border-[#232527] bg-[#121314b7] p-2 px-4 font-[300] text-[#e3e7eac3] outline-none placeholder:text-[#e3e7ea73] focus:border-[#2f3134] xs:w-[300px] md:w-[500px] xl:w-[600px]"
                  onChange={(e) => setWhyUse(e.target.value)}
                />
              </div>
              <div
                className="w-[400px] cursor-pointer rounded-full border-2 border-[hsl(210,100%,60%)] bg-gradient-to-t from-[#0071E3] to-[hsl(210,100%,60%)] p-2 text-center text-white transition-all duration-300 hover:brightness-105 xs:w-[300px] md:w-[500px] xl:w-[600px]"
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
              text="Don't keep it blank atleast write a joke ;)"
              textColor="#e3e7eac3"
            />
          </>
        )}

        {showSuccess && !isLoading && (
          <>
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={20}
              friction={1.0}
            />
            <div className="flex flex-col items-center gap-12">
              <p className="max-w-lg text-center text-xl text-[#bccfe2] lg:text-2xl">
                You have{" "}
                <span className="instrument-serif-regular-italic">
                  successfully
                </span>{" "}
                registered! We will notify you when Cauldron is ready for you!
              </p>
              <p className="text-md max-w-md text-center font-[400] text-[#b8c1c7cc]">
                In the meantime, you can join our Discord and follow us on X for
                more updates.
              </p>
              <div className="m-auto flex items-center gap-5 md:m-0">
                <Link to="">
                  <img
                    src={Discord}
                    alt="Instagram"
                    className="w-8 opacity-80 transition-all hover:opacity-100"
                  />
                </Link>
                <Link to="">
                  <img
                    src={X}
                    alt="Linkedin"
                    className="w-8 opacity-80 transition-all hover:opacity-100"
                  />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
