// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import {initializeAuth,getReactNativePersistence,browserLocalPersistence}from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-rMqkfAXr-av1R9rZDBeZGZfH2MbSxCE",
  authDomain: "primeiro-projeto-noite-af810.firebaseapp.com",
  projectId: "primeiro-projeto-noite-af810",
  storageBucket: "primeiro-projeto-noite-af810.firebasestorage.app",
  messagingSenderId: "1011746401453",
  appId: "1:1011746401453:web:3f1fc9b1d00823d6e52a24",
  measurementId: "G-ECLXR1192Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

const persistenceMode = Platform.OS === 'web'
? browserLocalPersistence
: getReactNativePersistence(AsyncStorage);

const auth = initializeAuth(app, {persistence: persistenceMode});
export { db, auth }