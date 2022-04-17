// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyn57k8cjg88JqXAwl7FGVX-d2c_sIH7w",
  authDomain: "ema-jhon-24dd3.firebaseapp.com",
  projectId: "ema-jhon-24dd3",
  storageBucket: "ema-jhon-24dd3.appspot.com",
  messagingSenderId: "492819723241",
  appId: "1:492819723241:web:aba3629d3467b11c89d178",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;