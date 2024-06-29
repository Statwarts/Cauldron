import register from "../../../Firebase/firestore";
import { useEffect, useState } from "react";
import store from "../../../store";
import "../../../Firebase/firebaseConfig";
import Notification from "../../components/notification/notification";
export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(window.localStorage.getItem("email"));
  const [showNotification, setShowNotification] = useState(false);
  //   console.log(window.localStorage.getItem("email"));
  const handleSubmit = () => {
      if(email === "" || email === null){
          setShowNotification(2);
          return;
      };
    if (name == "" || name == null) {
      setShowNotification(1);
      return;
    }
    register(email,name, phone);
  };
  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
  }, [showNotification]);
  return (
    <div className="flex h-screen flex-col gap-2 bg-black">
      <div className="mt-20 flex max-w-md flex-col gap-2">
      <input
          required={true}
          type="text"
          placeholder="Email"
          value={email}
          className="text-black outline-1 placeholder:text-black"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required={true}
          type="text"
          placeholder="Name"
          value={name}
          className="text-black outline-1 placeholder:text-black"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          value={phone}
          placeholder="Phone Number"
          className="p-1 outline-1 placeholder:text-black"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button className="text-white" onClick={() => handleSubmit()}>
        Register
      </button>
      <Notification
        isModalVisible={showNotification === 1}
        text="Please enter your name"
        textColor="text-white"
      />
      <Notification
        isModalVisible={showNotification === 2}
        text="Please enter your email"
        textColor="text-white"
      />
    </div>
  );
}
