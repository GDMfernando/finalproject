// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIajJtvXIrGKMem_Ljj6NMu1gbeh-Ldiw",
  authDomain: "bookland-gdmfernando.firebaseapp.com",
  databaseURL: "https://bookland-gdmfernando.firebaseio.com",
  projectId: "bookland-gdmfernando",
  storageBucket: "bookland-gdmfernando.appspot.com",
  messagingSenderId: "517200059808",
  appId: "1:517200059808:web:463a206d9df42b65a958c5",
  measurementId: "G-TBRERJJTLT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;