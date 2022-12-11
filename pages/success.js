import Head from 'next/head';
import Link from 'next/link';

import Footer from '@components/Footer';

export default function Success() {
  return (
    <div>
      <Head>
        <title>Next.js Toolbox Template!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Thank you for filling out the form.</h1>
        <p>
          Thank you for your feedback! Head back to the{' '}
          <Link href="/">
            <a>home page</a>
          </Link>
          .
        </p>
      </main>

      <Footer />
    </div>
  );
}
