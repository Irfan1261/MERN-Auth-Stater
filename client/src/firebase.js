// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-7c530.firebaseapp.com",
  projectId: "blog-app-7c530",
  storageBucket: "blog-app-7c530.appspot.com",
  messagingSenderId: "1074075583384",
  appId: "1:1074075583384:web:6f9ec55e393578ab7c21ed",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
