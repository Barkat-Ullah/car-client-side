// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1B03_4OTcm40nWNOrCroMH3U369Hgt-0",
  authDomain: "task-of-practice.firebaseapp.com",
  projectId: "task-of-practice",
  storageBucket: "task-of-practice.appspot.com",
  messagingSenderId: "1029159388919",
  appId: "1:1029159388919:web:cf25e3db0f372c24cd35f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;