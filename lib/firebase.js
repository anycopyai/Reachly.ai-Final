// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; 


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIkDuqKxXI8xAudiygWmWXmEhnVvleJys",
  authDomain: "elixcent-849aa.firebaseapp.com",
  projectId: "elixcent-849aa",
  storageBucket: "elixcent-849aa.appspot.com",
  messagingSenderId: "271814045315",
  appId: "1:271814045315:web:c4dbc74b4ca275084eb5b6",
  measurementId: "G-NFQTDF45Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app); // Correct way to initialize storage

export { storage, auth, db };
