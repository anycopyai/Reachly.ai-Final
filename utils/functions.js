import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const saveUser = async (uid, data) => {
  try {
    const collectionRef = collection(db, "users");
    const documentRef = doc(collectionRef, uid); // Using custom UID here
    await setDoc(documentRef, { ...data, createdAt: serverTimestamp() });
  } catch (error) {
    console.error("Error adding document with custom UID: ", error);
  }
};