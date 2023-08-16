import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Steteler Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Inter&family=Raleway&display=swap" rel="stylesheet" />
        <meta charSet="UTF-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
