// utils/auth.js
import { firebaseAdmin } from './firebaseAdmin';

export const checkServerSideAuth = async (context) => {
  try {
    const token = context.req.headers.cookie; // Get the token from cookies
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    return { uid: decodedToken.uid };
  } catch (error) {
    return null;
  }
};
