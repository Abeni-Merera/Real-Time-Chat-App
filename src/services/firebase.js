import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxH9WHqSCDkj6_Rp5boN3CcrA5mCDCmZk",
  authDomain: "realtime-chat-app-45610.firebaseapp.com",
  projectId: "realtime-chat-app-45610",
  storageBucket: "realtime-chat-app-45610.appspot.com",
  messagingSenderId: "1023086842492",
  appId: "1:1023086842492:web:ff56fb988d6b177b28eff9",
  measurementId: "G-WD6RGD9WKP"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };