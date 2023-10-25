// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK6aTZfmT3YFQ4ZzSPgPL_a5karQsDWso",
  authDomain: "emergencia-contacto.firebaseapp.com",
  projectId: "emergencia-contacto",
  storageBucket: "emergencia-contacto.appspot.com",
  messagingSenderId: "613285798477",
  appId: "1:613285798477:web:b4a4eaa76e4f50e81ab204"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);