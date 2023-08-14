import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const  storage =  firebase/storage