// _app.js
import '../styles/globals.css'; // Your global styles
import '@fortawesome/fontawesome-free/css/all.css'; // Import the FontAwesome CSS
import '../utils/fontawesome';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
