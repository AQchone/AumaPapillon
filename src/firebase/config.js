// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWmJunclIcjr5DhC8raJ3i64uFDaXWTfI",
  authDomain: "auma-y-papilion-tienda.firebaseapp.com",
  projectId: "auma-y-papilion-tienda",
  storageBucket: "auma-y-papilion-tienda.appspot.com",
  messagingSenderId: "1079951172183",
  appId: "1:1079951172183:web:6be3a3da1a9aead92ab912",
  measurementId: "G-X53ME4EMXH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
