// pages/index.js

import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '../components/sidebar';
import TopBar from '../components/TopBar';
import MainContent from '../components/MainContent';

export default function Home() {
  return (
    <>
    <Head>
        <title>AI-Driven Email Personalization Platform - Boost Engagement & Sales</title>
        <meta name="description" content="Experience the future of email marketing with our AI-powered personalization platform. Elevate your outreach with tailored content, increase engagement rates, and drive sales effectively. Perfect for businesses seeking to harness the power of AI for smarter email strategies." />
      </Head>
    <div>
    
      <>
      <div className="flex h-screen ml-20 overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <MainContent />
      </div>
    </div>

</>

    
    </div>
    </>
  );
}
