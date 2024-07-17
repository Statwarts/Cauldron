import register from "../../../Firebase/firestore";
import { useEffect, useState } from "react";
import "../../../Firebase/firebaseConfig";
import Notification from "../../components/notification/notification";
import "react-phone-input-2/lib/style.css";
import Confetti from "react-confetti";
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
  const [isDublicate, setIsDublicate] = useState(false);

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
    const result = await register(email, name, phone, whyUse);
    if (result === true) {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": import.meta.env.VITE_EMAIL_API_KEY,
        },
        body: JSON.stringify({
          sender: {
            name: "Cauldron",
            email: "support@cauldron.live",
          },
          to: [
            {
              email: email,
              name: name,
            },
          ],
          subject: "Welcome to Cauldron!",
          htmlContent:
            `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .container {
            width: 100%;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin: 20px auto;
            max-width: 600px;
          }
          .header {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            text-align: center;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
          }
          .content {
            padding: 20px;
            color: #333333;
          }
          .footer {
            text-align: center;
            padding: 10px;
            color: #777777;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Cauldron!</h1>
          </div>
          <div class="content">
            <p>Hello ${name},</p>
            <p>Thank you for registering at Cauldron. We're excited to have you on board!</p>
            <p>We will notify you as soon as Cauldron is ready for you.</p>
            <p>If you have any questions, feel free to reach out to our support team at any time.</p>
            <p>Best regards,</p>
            <p>The Cauldron Team</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Cauldron. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
        }),
      });
      console.log(response);
      setShowSuccess(true);
      setIsLoading(false);
    } else if (result === 0) {
      setIsDublicate(true);
      setShowSuccess(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      console.log("loading is false");
    }

    if (isLoading) {
      console.log("loading is true");
    }
  }, [isLoading]);

  useEffect(() => {
    console.log("Dublicate: ", isDublicate);
  }, [isDublicate]);

  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
  }, [showNotification]);

  return (
    <>
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
              text="Don't keep it blank at least write a joke ;)"
              textColor="#e3e7eac3"
            />
          </>
        )}

        {showSuccess && !isLoading && (
          <>
            {!isDublicate && (
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={20}
                friction={1.0}
              />
            )}
            <div className="flex flex-col items-center gap-12">
              {!isDublicate && (
                <p className="max-w-lg text-center text-xl text-[#bccfe2] lg:text-2xl">
                  You have{" "}
                  <span className="instrument-serif-regular-italic">
                    successfully
                  </span>{" "}
                  registered! We will notify you when Cauldron is ready for you!
                </p>
              )}
              {isDublicate && (
                <p className="max-w-lg text-center text-xl text-[#bccfe2] lg:text-2xl">
                  You have{" "}
                  <span className="instrument-serif-regular-italic">
                    already
                  </span>{" "}
                  registered! We will notify you when Cauldron is ready for you!
                </p>
              )}
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
