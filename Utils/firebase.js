// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkr9pkttIpIJl0n3MJb03WN9Ue-N1mEdk",
  authDomain: "swiggy-clone-17.firebaseapp.com",
  projectId: "swiggy-clone-17",
  storageBucket: "swiggy-clone-17.appspot.com",
  messagingSenderId: "239731410316",
  appId: "1:239731410316:web:26b9ff2638f7eba96b42a9",
  measurementId: "G-HV63SG6NEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();
