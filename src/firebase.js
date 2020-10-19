import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyClLY1WZRP-LmsnsvIOCgOcZYoouk1Ehzg",
    authDomain: "facebook-messenger-app-950c7.firebaseapp.com",
    databaseURL: "https://facebook-messenger-app-950c7.firebaseio.com",
    projectId: "facebook-messenger-app-950c7",
    storageBucket: "facebook-messenger-app-950c7.appspot.com",
    messagingSenderId: "748386252329",
    appId: "1:748386252329:web:4e4550096ef5ebf6f70e38",
    measurementId: "G-DLL9YBS7ZW"
  });

  const db = firebaseApp.firestore();
  export default db;