import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="description" content="Portfólio de João Victor Steteler, desenvolvedor fullstack. Com 4 anos de experiência em Javascript, React, Next e Node, cria sites e aplicações utilizando as melhores tecnologias e boas práticas do mercado" />
        <meta name="author" content="João Victor Steteler De Matos Kikuti" />
        <meta name="keywords" content="portfolio, desenvolvedor, programador, fullstack, frontend, backend, javascript, typescript, react, next, node, sql, express" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://steteler.github.io/steteler-portfolio/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Inter&family=Raleway&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
