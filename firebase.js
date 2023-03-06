// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvAqB9XmsGwFd8UU9rFfk3ZBU0IJrY8Og",
  authDomain: "insta-2-yt-e8261.firebaseapp.com",
  projectId: "insta-2-yt-e8261",
  storageBucket: "insta-2-yt-e8261.appspot.com",
  messagingSenderId: "892217736162",
  appId: "1:892217736162:web:53ff295479da4ba49817bb"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
