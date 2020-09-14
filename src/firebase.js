import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWG0FdRKdXRMYs_8_HKO6kB07bvYo1X6I",
  authDomain: "clone-89041.firebaseapp.com",
  databaseURL: "https://clone-89041.firebaseio.com",
  projectId: "clone-89041",
  storageBucket: "clone-89041.appspot.com",
  messagingSenderId: "629890216963",
  appId: "1:629890216963:web:cef7835cda6959553a0a36",
  measurementId: "G-6J8GXP3F8D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
