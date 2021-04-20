import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDytqa0bMps5Dk2v2UEn2vTNOFFmIQ_OHc",
    authDomain: "challenge-e58f0.firebaseapp.com",
    databaseURL: "https://challenge-e58f0.firebaseio.com",
    projectId: "challenge-e58f0",
    storageBucket: "challenge-e58f0.appspot.com",
    messagingSenderId: "825891009841",
    appId: "1:825891009841:web:4aea40fcda0c5718556c10",
    measurementId: "G-4KZD685D40"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { db, auth};