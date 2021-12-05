import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBjJn5EgElRmHtxR7K1wZis4DjDoFHuZa8",
    authDomain: "robinhod-clone.firebaseapp.com",
    projectId: "robinhod-clone",
    storageBucket: "robinhod-clone.appspot.com",
    messagingSenderId: "316124549510",
    appId: "1:316124549510:web:26106dfe0c028983bedc07"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };