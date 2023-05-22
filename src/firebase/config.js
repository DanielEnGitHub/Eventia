// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFirestore as getFirestoreLite } from "firebase/firestore/lite";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn5Fohi-xvq24FP-j_Ecd6eGze1PHebuM",
  authDomain: "eventia-9234e.firebaseapp.com",
  projectId: "eventia-9234e",
  storageBucket: "eventia-9234e.appspot.com",
  messagingSenderId: "57771799166",
  appId: "1:57771799166:web:f809715ed32cfbe3fb5e2f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const dbLite = getFirestoreLite(app);
const auth = getAuth();

export {
  app,
  db,
  dbLite,
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
