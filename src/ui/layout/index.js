// React
import { Fragment } from 'react';
// Next
import Head from 'next/head';


export const ShopLayout = ({
  children,

  pageTitle = '',
  pageDesc = '',
  pageKeywords = '',
  pageImage = '',
}) => {
  const layoutPageTitle = `müpütun | ${ pageTitle }`;

  return (
    <Fragment>
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

      {/*Particles BG*/}
      {/*ButtonBox*/}
      <nav>
        {/*Navbar*/}
      </nav>

      {/*Sidebar*/}

      <main>
        { children }
      </main>

      {/*Footer*/}
    </Fragment>
  );
}
