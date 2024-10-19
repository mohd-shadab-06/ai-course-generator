// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "course-generator-ai.firebaseapp.com",
  projectId: "course-generator-ai",
  storageBucket: "course-generator-ai.appspot.com",
  messagingSenderId: "709383741022",
  appId: "1:709383741022:web:4ea017b3594d7659421ecf",
  measurementId: "G-FHR7W1912F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
