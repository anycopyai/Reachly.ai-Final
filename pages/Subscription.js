import Head from 'next/head';
import { useEffect } from 'react';

export default function Subscription() {
  useEffect(() => {
    // Load Stripe script
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <Head>
        <title>Subscription Plans</title>
      </Head>

      <h1>Subscription Plans</h1>

      <stripe-pricing-table 
        pricing-table-id="prctbl_1OHr7SSGA5bzTINYJpjLYlGl"
        publishable-key="pk_live_51MexddSGA5bzTINYYfiMeipvAkg9ga9CYrGxxaalqGszG1CgEgR3kD7c93JhPY04Q9fDcPQGNmihP1tTHxEOZARb00bU8Ix9o8">
      </stripe-pricing-table>
    </div>
  );
}
