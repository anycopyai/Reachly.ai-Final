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
import FeatureSection3 from '../components/web/FeatureSection3';
import Link from 'next/link';
import Head from 'next/head';




export default function Home() {
  return (
    <>
    <Head>
        <title>AI-Driven Email Personalization Platform - Boost Engagement & Sales</title>
        <meta name="description" content="Experience the future of email marketing with our AI-powered personalization platform. Elevate your outreach with tailored content, increase engagement rates, and drive sales effectively. Perfect for businesses seeking to harness the power of AI for smarter email strategies." />
      </Head>
    <div>
    
      <>
  {/* Announcement Banner */}
  <div
    id="ab-full-width-with-dismiss-button-on-blue-bg"
    className="hs-removing:-translate-y-full bg-blue-600"
  >
    <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
      <div className="flex">
        <p className="text-white">
        Join Our Webinar:   Mastering Sales Personalization Strategies for 2024           <a
            className="decoration-2 underline font-medium hover:text-white/[.8] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="/webinar"
          >
            Join Webinar 
          </a>
        </p>
        <div className="ps-3 ms-auto">
          <button
            type="button"
            className="inline-flex rounded-lg p-1.5 text-white/[.8] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
            data-hs-remove-element="#ab-full-width-with-dismiss-button-on-blue-bg"
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="flex-shrink-0 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* End Announcement Banner */}
</>

      <Navbar />
      <Hero />
      <Clients />
      <FeatureSection1 />
   
      <FeatureSection2 />
      <FeatureSection3 />

<Testimonials />

<Faqs />
<Help />
      <Footer />
    </div>
    </>
  );
}
