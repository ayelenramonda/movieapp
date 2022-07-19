// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "../firebase/firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdaBImEiYMPupYiERPoQSTBUTdQ9WtMKU",
  authDomain: "mymovieapp-d8761.firebaseapp.com",
  projectId: "mymovieapp-d8761",
  storageBucket: "mymovieapp-d8761.appspot.com",
  messagingSenderId: "208543244572",
  appId: "1:208543244572:web:a90ecc69286fec4bfddad9",
  measurementId: "G-TSYMBH4NJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getFirebase = () => app;

export { getFirestore };
