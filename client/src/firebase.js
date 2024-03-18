// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-809c6.firebaseapp.com",
  projectId: "real-estate-809c6",
  storageBucket: "real-estate-809c6.appspot.com",
  messagingSenderId: "870133582252",
  appId: "1:870133582252:web:39ea5fe9663d004d17d209"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);