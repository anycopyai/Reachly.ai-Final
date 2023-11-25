// pages/index.js
import Navbar from '../components/web/NavigationBar'; // NavigationBar component
import Hero from '../components/web/HeroSection';     // HeroSection component
import FeaturesSection from '../components/web/feature1'; // FeaturesSection component
import Footer from '../components/web/Footer';       // Footer component

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <feature1 /> {/* Correctly include the FeaturesSection component */}
      <Footer />
    </div>
  );
}
