import db from "./firebaseConfig.js";
import { collection, query, where, addDoc, getDocs } from "firebase/firestore";

async function isUniqueUser(email) {
  const userRef = collection(db, "users");
  const q = query(userRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  return querySnapshot.size === 0;
}

async function register(email, name, phone, whyUse) {
  window.localStorage.removeItem("email");
  console.log(email, name, phone, whyUse);
  
  if (email === "" || email === null) {
    console.log("Email not found");
    return -1;
  }
  if (name === "" || name === null) {
    console.log("Name not found");
    return -1;
  }

  const isUniqueUserCheck = await isUniqueUser(email);
  if (!isUniqueUserCheck) {
    console.log("User already exists");
    return -1;
  }

  const userData = {
    email: email,
    name: name,
  };

  if (phone !== "" && phone !== null) {
    userData.phone = phone;
  }

  if (whyUse !== "" && whyUse !== null) {
    userData.whyUse = whyUse;
  }

  try {
    const docRef = await addDoc(collection(db, "users"), userData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default register;
