import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDyOH-6EEx7Lt3eoxU5vKjlgvcvGfxfatM",
  authDomain: "crwn-db-8db9f.firebaseapp.com",
  projectId: "crwn-db-8db9f",
  storageBucket: "crwn-db-8db9f.appspot.com",
  messagingSenderId: "884224593280",
  appId: "1:884224593280:web:00365bb86f3855548cc565",
  measurementId: "G-T9V5872RZN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;