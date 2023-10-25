import '../styles/globals.css'; // Your global styles
import '@fortawesome/fontawesome-free/css/all.css'; // Import the FontAwesome CSS
import '../utils/fontawesome';
import { UserProvider } from '../contexts/UserContext'; // Import the UserProvider

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
