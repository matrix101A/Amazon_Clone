import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC7srOD8aM29QE8cZeCzqWEHAF3R5HoPbk",
  authDomain: "project-d50fd.firebaseapp.com",
  databaseURL: "https://project-d50fd.firebaseio.com",
  projectId: "project-d50fd",
  storageBucket: "project-d50fd.appspot.com",
  messagingSenderId: "124526583977",
  appId: "1:124526583977:web:79e154297e205abfb949b8",
  measurementId: "G-8CKJ02P1T4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
