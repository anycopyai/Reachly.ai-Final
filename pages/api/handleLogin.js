import * as admin from "firebase-admin";
import axios from 'axios';

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert("./reachly-47ee5-firebase-adminsdk-toxtn-b28d403c19.json"),
  });
}

const auth = admin.auth();

export default async (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    console.error('Token must be provided');
    return res.status(401).json({ error: 'Token must be provided' });
  }

  try {
    const decodedToken = await auth.verifyIdToken(token);

    try {
      const backendResponse = await axios.post('https://api.elixcent.com/auth', {
        userId: decodedToken.uid,
        // Add any other info you need
      });

      if (backendResponse.status === 200) {
        return res.status(200).json({ status: 'success', userId: decodedToken.uid });
      } else {
        console.error('Backend API error:', backendResponse.data);
        return res.status(backendResponse.status).json(backendResponse.data);
      }
    } catch (err) {
      console.error('Error from backend API:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({ error: 'Unauthorized' });
  }
};
