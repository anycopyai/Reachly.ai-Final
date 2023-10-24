import * as admin from 'firebase-admin';
import serviceAccount from './reachly-47ee5-firebase-adminsdk-toxtn-c795cb1e9e.json'; // Update this path

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;
