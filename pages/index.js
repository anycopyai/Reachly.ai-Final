
import Head from "next/head";
import { useRouter } from "next/router";
import withAuth from "../hoc/withAuth";
import React, {useEffect } from 'react';


function Home() {
  const router = useRouter();
  useEffect(() => {
      router.push('/browse');
  }, []);
  return (
    <>
      <Head>
        <title>
          AI-Driven Email Personalization Platform - Boost Engagement & Sales
        </title>
        <meta
          name="description"
          content="Experience the future of email marketing with our AI-powered personalization platform. Elevate your outreach with tailored content, increase engagement rates, and drive sales effectively. Perfect for businesses seeking to harness the power of AI for smarter email strategies."
        />
      </Head>
    
    </>
  );
}
export default withAuth(Home);