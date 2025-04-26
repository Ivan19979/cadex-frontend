// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';
import { theme } from '../theme';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content={theme.palette.primary.main} />
        
        <meta name="description" content="Convert, view and analyze 3D CAD data across 30+ formats with our high-performance toolkit" />
        <meta name="keywords" content="CAD, 3D, converter, engineering, design, visualization" />
        
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CAD Exchanger" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cadexchanger" />
        <meta name="twitter:creator" content="@cadexchanger" />
        
        <link rel="icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}