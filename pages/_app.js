// _app.js or _app.tsx
import '../styles/globals.css'; // Your global styles
import '@fortawesome/fontawesome-free/css/all.css'; // Import the FontAwesome CSS
import './fontawesome'; // Import your FontAwesome configuration


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
