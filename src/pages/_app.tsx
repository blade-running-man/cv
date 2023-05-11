import '../styles/global.css';

import type { AppProps } from 'next/app';

import { GoogleAnalytics } from '@/lib/googleAnalytics';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
