// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "appadi-820fd.firebaseapp.com",
  projectId: "appadi-820fd",
  storageBucket: "appadi-820fd.appspot.com",
  messagingSenderId: "420791613759",
  appId: "1:420791613759:web:624011bc4840ade1023b8a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);