// pages/index.js
import Navbar from '../components/web/Navbar';
import Hero from '../components/web/Hero';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* ... Rest of the page content ... */}
    </div>
  );
}
