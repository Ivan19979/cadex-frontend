// pages/_app.tsx
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import '../../styles/globals.css';
import Head from 'next/head';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;