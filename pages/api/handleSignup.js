import { admin, db } from './firebaseAdmin'; // Importing initialized Firebase Admin and Firestore
import { FieldValue } from 'firebase-admin/firestore';

export default async function handleSignup(req, res) {
  const { uid, email, name, token } = req.body;

  // Validate request body
  if (!uid || !email || !name || !token) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  try {
    // Verify the token
    const decodedToken = await admin.auth().verifyIdToken(token);
    if (decodedToken.uid !== uid) {
      throw new Error('Token does not match the provided UID');
    }

    // Check if user already exists in Firestore
    const userRef = db.collection('users').doc(uid);
    const doc = await userRef.get();
    if (!doc.exists) {
      // Add initial user data to Firestore
      await userRef.set({
        email: email,
        displayName: name,
        credits: 20, // Assign 20 credits for email copy generation
        trialDays: 7, // 7 days of trial
        emailsSent: 0, // Initial count of emails sent
        contactsAdded: 0, // Initial count of contacts added
        createdAt: FieldValue.serverTimestamp(), // Firebase server timestamp
      });
    } else {
      console.log(`User with UID ${uid} already exists.`);
    }

    // Respond with success message
    res.status(200).json({
      success: true,
      uid: uid,
      email: email,
      name: name,
      credits: 20,
      trialDays: 7
    });

  } catch (error) {
    console.error('Error in handleSignup:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
