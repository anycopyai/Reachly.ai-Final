import * as admin from 'firebase-admin';
import { existsSync } from 'fs';
import axios from 'axios'; // Import Axios

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  const serviceAccountPath = './reachly-47ee5-firebase-adminsdk-toxtn-b28d403c19.json';
  if (existsSync(serviceAccountPath)) {
    const serviceAccount = require(serviceAccountPath);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } else {
    console.error('Firebase Admin SDK service account not found');
    process.exit(1);
  }
}

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

    // Here you can forward the request to your Flask backend.
    // Replace 'http://localhost:5000/api/handlesignup' with the actual URL of your Flask API.
    const flaskResponse = await axios.post('http://localhost:5000/api/handlesignup', {
      uid: userRecord.uid,
      email,
      customToken,
    });

    if (flaskResponse.data.success) {
      // Send the token back to the client along with Flask API response
      res.status(200).json({ token: customToken, flaskData: flaskResponse.data });
    } else {
      res.status(500).json({ error: 'Flask API returned an error', flaskData: flaskResponse.data });
    }

  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send(error);
  }
}
