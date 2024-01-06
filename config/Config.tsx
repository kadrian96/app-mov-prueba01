// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtjtW9El-DmmwpDFzi3PdQnwdlVALLzCc",
  authDomain: "prueba-01-b3b5c.firebaseapp.com",
  databaseURL: "https://prueba-01-b3b5c-default-rtdb.firebaseio.com",
  projectId: "prueba-01-b3b5c",
  storageBucket: "prueba-01-b3b5c.appspot.com",
  messagingSenderId: "937536874265",
  appId: "1:937536874265:web:1aa2dee2d1efdb684a8788"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getDatabase(app)