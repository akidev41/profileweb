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
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="EsRbNcag9i4y_8jQPI4MAtPpA5eIFM5SEZXVyonuJTU" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9863L0NYD4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9863L0NYD4');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

