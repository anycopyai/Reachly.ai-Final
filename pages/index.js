// pages/index.js
import Navbar from '../components/web/NavigationBar'; // NavigationBar component
import Footer from '../components/web/Footer';       // Footer component
import Testimonials from '../components/web/testimonials';
import Hero from '../components/web/Hero';
import Faqs from '../components/web/Faqs';
import FeatureSection1 from '../components/web/FeatureSection1';
import FeatureSection2 from '../components/web/FeatureSection2';
import Help from '../components/web/Help';
import Clients from '../components/web/Clients';



export default function Home() {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-indigo-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-center font-medium sm:text-left">
          Love Alpine JS?
          <br className="sm:hidden" />
          Check out this new deep dive course!
        </p>
        <a
          className="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
          href="#"
        >
          Learn More
        </a>
      </div>
      <Navbar />
      <Hero />
      <Clients />
      <FeatureSection1 />
    
      <FeatureSection2 />


<Testimonials />
<Faqs />
<Help />
      <Footer />
    </div>
  );
}
