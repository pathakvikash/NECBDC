import Head from 'next/head';
import '../styles/globals.css';

import { ThemeProvider } from '@material-tailwind/react';
import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Header from '../components/Header';
import { Quick } from './test';
import Layout from '../components/Layout';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=''>
      <ThemeProvider>
        <Head>
          <title>NECBDC | North East Cane and Bamboo Development Council</title>
          <link rel='icon' href='/smallLogo.ico' />
          <meta
            name='description'
            content='North East Cane and Bamboo Development Council'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
