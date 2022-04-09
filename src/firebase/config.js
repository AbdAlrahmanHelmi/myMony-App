import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWnT7t_xwynhDH9Q00xnIannPl9HYIVFE",
  authDomain: "mymoney-6b397.firebaseapp.com",
  projectId: "mymoney-6b397",
  storageBucket: "mymoney-6b397.appspot.com",
  messagingSenderId: "1065189043557",
  appId: "1:1065189043557:web:29015c18f42020c697458c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
