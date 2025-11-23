import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const siteUrl = 'https://akidev41.github.io/profileweb/';
  
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sawada Aki - Portfolio</title>
        <meta name="title" content="Sawada Aki - Portfolio" />
        <meta name="description" content="Product Manager and Creative Professional based in Tokyo. Specializing in AI-driven product development, user experience design, and turning ambitious ideas into meaningful reality. 澤田明樹" />
        <meta name="keywords" content="Sawada Aki, 澤田明樹, Product Manager, UX Design, Tokyo, AI Products, Creative Professional, Portfolio, Lee Aki" />
        <meta name="author" content="Sawada Aki" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

