// pages/index.js
import Navbar from '../components/web/Navbar';
import Hero from '../components/web/Hero';
import Features from '../components/web/Features'; // This line imports the Features component
import Footer from '../components/web/Footer'; // Make sure to import the Footer component

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features /> {/* This line includes the Features component in the page */}
      {/* ... Rest of the page content ... */}
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}
