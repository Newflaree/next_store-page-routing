// Next
import Image from 'next/image';
import Head from 'next/head';
// Components
import { ParticlesBackground } from '../components';


export const AuthLayout = ({
  children,

  pageTitle = '',
  pageDesc = '',
  pageKeywords = '',
  pageImage = '',
}) => {
  const layoutPageTitle = `müpütun | ${ pageTitle }`;

  return (
    <div>
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

      <div className='flex justify-center'>
        <div className='w-full sm:w-[350px] px-10'>
          <ParticlesBackground />

          <div
            className='flex justify-center mb-5'
          >
            <Image
              src='/logo.png'
              alt='mupütun'
              className='p-5 sm:p-0 mt-5'
              width={ 200 }
              height={ 100 }
            />
          </div>

          { children }
        </div>
      </div>
    </div>
  );
}

