
import { initializeApp } from "firebase/app";
import {getFirestore}from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB7Z_K-jeICq_gKC2DYiPa00-rP72TVb0c",
  authDomain: "newsapp-bf05d.firebaseapp.com",
  projectId: "newsapp-bf05d",
  storageBucket: "newsapp-bf05d.appspot.com",
  messagingSenderId: "396184400827",
  appId: "1:396184400827:web:1cf4aa3700d1316c35ca9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);