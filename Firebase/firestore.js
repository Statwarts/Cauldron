import db from "./firebaseConfig.js";
import { collection, query, where, addDoc, getDocs } from "firebase/firestore";

async function isUniqueUser(email, name, phone) {
  const userRef = collection(db, "users");
  const q = query(userRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  return querySnapshot.size === 0;
}

async function register(email, name, phone) {
  window.localStorage.removeItem("email");
  console.log(email, name, phone);
  if (email === "" || email === null) {
    console.log("Email not found");
    return -1;
  }
  if (name === "") {
    console.log("Name not found");
    return -1;
  }
  //   confirm("Are you sure you want to register?");
  const isUniqueUserCheck = await isUniqueUser(email, name, phone);
  if (!isUniqueUserCheck) {
    console.log("User already exists");
    return -1;
  }

  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: email,
      name: name,
      phone: phone,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default register;
