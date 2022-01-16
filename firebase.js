// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// 👆👆 all of these are inbuilt fn in firebase

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBrXsHIVA51KyWbx6fCPMyyyHOUG6oUZ0",
  authDomain: "twitter-clone-702f1.firebaseapp.com",
  projectId: "twitter-clone-702f1",
  storageBucket: "twitter-clone-702f1.appspot.com",
  messagingSenderId: "949992248009",
  appId: "1:949992248009:web:59f70f8281299a500a3318",
  measurementId: "G-9HGX7T4FQC",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
