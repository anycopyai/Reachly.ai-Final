// lib/firebaseAdmin.js
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  const serviceAccount = require('./reachly-47ee5-firebase-adminsdk-toxtn-b28d403c19.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
export const auth = admin.auth();
