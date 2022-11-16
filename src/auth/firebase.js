// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCINj-fbwDmz6mkw2c7sVkJn-u90O0FmTU",
  authDomain: "movie-app-7cfc0.firebaseapp.com",
  projectId: "movie-app-7cfc0",
  storageBucket: "movie-app-7cfc0.appspot.com",
  messagingSenderId: "870331129355",
  appId: "1:870331129355:web:98c6bb94bc4d7043b0b10e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
