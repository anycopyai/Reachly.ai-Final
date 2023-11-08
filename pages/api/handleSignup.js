import * as admin from 'firebase-admin';
import { existsSync } from 'fs';
import axios from 'axios'; // Import Axios
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  const serviceAccountPath = './reachly-47ee5-firebase-adminsdk-toxtn-b28d403c19.json';
  if (existsSync(serviceAccountPath)) {
    const serviceAccount = require(serviceAccountPath);
    initializeApp({
      credential: cert(serviceAccount),
    });
  } else {
    console.error('Firebase Admin SDK service account not found');
    process.exit(1);
  }
}

// Firestore instance
const db = getFirestore();

export default async function handleSignup(req, res) {
  const { email, password, name } = req.body;

  try {
    // Use the Admin SDK to create a new user
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: name,
    });

    // Generate a custom JWT token for the client
    const customToken = await admin.auth().createCustomToken(userRecord.uid);

    // Add initial user data to Firestore
    const userRef = db.collection('users').doc(userRecord.uid);
    await userRef.set({
      email: email,
      displayName: name,
      credits: 15, // Assign 15 credits to the user
      trial: true, // Start with a trial subscription
      createdAt: FieldValue.serverTimestamp(), // Firebase server timestamp
    });

    // No need to forward to Flask backend if you handle everything here
    // Respond with the custom token and additional data
    res.status(200).json({
      uid: userRecord.uid,
      token: customToken,
      email: email,
      name: name,
      credits: 15,
      trial: true
    });

  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send(error);
  }
}
