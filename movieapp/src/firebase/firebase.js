
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCdaBImEiYMPupYiERPoQSTBUTdQ9WtMKU",
  authDomain: "mymovieapp-d8761.firebaseapp.com",
  projectId: "mymovieapp-d8761",
  storageBucket: "mymovieapp-d8761.appspot.com",
  messagingSenderId: "208543244572",
  appId: "1:208543244572:web:a90ecc69286fec4bfddad9",
  measurementId: "G-TSYMBH4NJF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
