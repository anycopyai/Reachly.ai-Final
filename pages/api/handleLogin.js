import * as admin from "firebase-admin";
import axios from 'axios';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert("./reachly-47ee5-firebase-adminsdk-toxtn-b28d403c19.json"),
  });
}

const auth = admin.auth();

export default async (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).send('Token must be provided');
  }

  try {
    const decodedToken = await auth.verifyIdToken(token);

    try {
      const backendResponse = await axios.post('https://api.elixcent.com/auth', {
        userId: decodedToken.uid,
        // any other info you need
      });

      if (backendResponse.status === 200) {
        return res.json({ status: 'success', userId: decodedToken.uid });
      } else {
        return res.status(backendResponse.status).send(backendResponse.data);
      }
    } catch (err) {
      console.error('Error from backend API:', err);
      return res.status(500).send('Internal Server Error');
    }

  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).send('Unauthorized');
  }
};
