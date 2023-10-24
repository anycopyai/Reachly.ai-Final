// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzdIX-4kmCGDNYDRHtq0mTJWkmQg58WF8",
  authDomain: "reachly-47ee5.firebaseapp.com",
  projectId: "reachly-47ee5",
  storageBucket: "reachly-47ee5.appspot.com",
  messagingSenderId: "361710023638",
  appId: "1:361710023638:web:fb2f6f96c01c27133daa77",
  measurementId: "G-5L2H4XTT1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
