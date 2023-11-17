// utils/auth.js
import axios from 'axios';

export const checkServerSideAuth = async (context) => {
  try {
    const token = context.req.headers.authorization?.split(' ')[1];
    if (!token) throw new Error('No token found');

    const response = await axios.post('https://api.elixcent.com/verify-token', { token });

    if (response.status === 200) {
      return response.data; // Returns user data
    } else {
      throw new Error('Authentication failed');
    }
  } catch (error) {
    return null; // Or handle the error as you see fit
  }
};
