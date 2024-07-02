// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-50aec.firebaseapp.com",
  projectId: "estate-50aec",
  storageBucket: "estate-50aec.appspot.com",
  messagingSenderId: "811324791829",
  appId: "1:811324791829:web:ab6b4a85cfd2e6d2db421c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
