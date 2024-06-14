// React
import { Fragment } from 'react';
// Next
import Head from 'next/head';
// Components
import {
  Footer,
  ParticlesBackground,
  TopMenu,
} from '@/ui/components';


export const ShopLayout = ({
  children,

  pageTitle = '',
  pageDesc = '',
  pageKeywords = '',
  pageImage = '',
}) => {
  const layoutPageTitle = `müpütun | ${ pageTitle }`;

  return (
    <div className='min-h-screen'>
      <Head>
        <title>{ layoutPageTitle }</title>
        <meta name='description' content={ pageDesc } />
        <meta name='keywords' content={ pageKeywords } />
        <meta name='robots' content='index' />
        <meta name='language' content='es' />

        <meta property='og:title' content={ layoutPageTitle } />
        <meta property='og:description' content={ pageDesc } />
        <meta property='og:image' content={ pageImage } />
        <meta property='og:url' content='' />
      </Head>

      <TopMenu />
      {/*Particles BG*/}
      <ParticlesBackground />
      {/*ButtonBox*/}


      {/*Sidebar*/}

      <main className='px-5 sm:px-10 sm:w-[1080px] m-auto'>
        { children }
      </main>

      <Footer />
    </div>
  );
}
