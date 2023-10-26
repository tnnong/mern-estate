// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7bd5f.firebaseapp.com",
  projectId: "mern-estate-7bd5f",
  storageBucket: "mern-estate-7bd5f.appspot.com",
  messagingSenderId: "863420356270",
  appId: "1:863420356270:web:2d0c7417702614fdc83f3f",
  measurementId: "G-6LB9EF5KTR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
