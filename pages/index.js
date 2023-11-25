// pages/index.js
import Navbar from '../components/web/NavigationBar'; // Updated to NavigationBar
import Hero from '../components/web/HeroSection';     // Updated to HeroSection
import Features from '../components/web/Features';   // Ensure this component exists
import Footer from '../components/web/Footer';       // Ensure this component exists
import Link from 'next/link';

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
