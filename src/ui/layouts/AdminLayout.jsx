// Next
import Image from 'next/image';
import Head from 'next/head';
// Components
import { ParticlesBackground } from '@/ui/components';


export const AdminLayout = ({
  children,

  pageTitle = '',
  pageDesc = '',
  pageKeywords = '',
  pageImage = '',
}) => {
  const layoutPageTitle = `müpütun Administrador | ${ pageTitle }`;

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

      <div className='min-h-full'>
        {/*TODO: AdminTopMenu*/}
        {/*TODO: AdminSideMenu*/}
        {/*TODO: ParticlesBackground */}

        <div className='px-0 sm:px-10 sm:w-[1080px] m-auto ml-[300px] mt-20'>
          { children }
        </div>
      </div>
    </div>
  );
}

