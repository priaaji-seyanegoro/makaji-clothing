import firebase from "firebase/app";
import "firebase/firestore"; //database
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA_jGQ6mcg6BuITmJdJVDSyWmMGH8NKrAY",
  authDomain: "makaji-clothing-db-950c7.firebaseapp.com",
  databaseURL: "https://makaji-clothing-db-950c7.firebaseio.com",
  projectId: "makaji-clothing-db-950c7",
  storageBucket: "makaji-clothing-db-950c7.appspot.com",
  messagingSenderId: "473803639079",
  appId: "1:473803639079:web:6669891f7195fd5d9c0102",
  measurementId: "G-CFMVHNZRWV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
