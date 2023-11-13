import * as admin from 'firebase-admin';
import { initializeApp, cert } from 'firebase-admin/app';

if (!admin.apps.length) {
  const serviceAccount = require('./reachly-47ee5-firebase-adminsdk-toxtn-b28d403c19.json');
  initializeApp({
    credential: cert(serviceAccount),
  });
}

export const db = admin.firestore();
export const auth = admin.auth();
