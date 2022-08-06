import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYob97S6nhahpv_j2oQFFpGzCFFAzgzdg",
  authDomain: "movie-website-project-dae39.firebaseapp.com",
  projectId: "movie-website-project-dae39",
  storageBucket: "movie-website-project-dae39.appspot.com",
  messagingSenderId: "784291358979",
  appId: "1:784291358979:web:b1cdfcf2c31ba8fb3b6136",
  measurementId: "G-GX8S0K2Z08"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider}