import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ne">
      <Head>
        <title>Anamaya Ayurved Multi-Specialty Clinic</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Anamaya Ayurved Multi-Specialty Clinic - Biratnagar - First stop in Biratnagar for your Ayurvedic needs - Cheap, Reliable"
        />
        <meta name="keywords" content="Ayurved, Anamaya, Clinic, Multi-Specialty, Health" />
        <meta name="author" content="Anamaya Ayurved Multi-Specialty Clinic" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
