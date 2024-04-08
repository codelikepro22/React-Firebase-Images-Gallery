// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRGPwdU-0pSs53fBms7VQhkIL64TZXj8g",
  authDomain: "test1-85b3d.firebaseapp.com",
  projectId: "test1-85b3d",
  storageBucket: "test1-85b3d.appspot.com",
  messagingSenderId: "751938613286",
  appId: "1:751938613286:web:8a999f233b3112cb1eb6e7",
  measurementId: "G-K354T3BD97"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();
