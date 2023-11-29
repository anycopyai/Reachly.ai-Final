// Import necessary dependencies from 'next' and 'react'
import Head from 'next/head';
import styles from '../styles/Home.module.css';

// This is the main component for your homepage
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A simple Next.js application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Next.js App!
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        {/* Add more content here as needed */}
      </main>

      <footer className={styles.footer}>
        Powered by <a href="https://nextjs.org">Next.js</a>
      </footer>
    </div>
  );
}
