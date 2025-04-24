// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';
import { theme } from '../theme';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Базовые мета-теги */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={theme.palette.primary.main} />
        
        {/* Общие SEO-теги */}
        <meta name="description" content="Convert, view and analyze 3D CAD data across 30+ formats with our high-performance toolkit" />
        <meta name="keywords" content="CAD, 3D, converter, engineering, design, visualization" />
        
        {/* OpenGraph мета-теги */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CAD Exchanger" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cadexchanger" />
        <meta name="twitter:creator" content="@cadexchanger" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Шрифты */}
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