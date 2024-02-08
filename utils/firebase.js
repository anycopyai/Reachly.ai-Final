// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAIkDuqKxXI8xAudiygWmWXmEhnVvleJys",
    authDomain: "elixcent-849aa.firebaseapp.com",
    databaseURL: "https://elixcent-849aa-default-rtdb.firebaseio.com",
    projectId: "elixcent-849aa",
    storageBucket: "elixcent-849aa.appspot.com",
    messagingSenderId: "271814045315",
    appId: "1:271814045315:web:7b63656da3fbadad4eb5b6",
    measurementId: "G-FXZSW520NN"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);
const storage = getStorage(app);

export { storage, auth, db };
