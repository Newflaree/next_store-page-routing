// Next
import Image from 'next/image';
import Head from 'next/head';
// Components
import {
  AdminSidebar,
  AdminTopMenu,
  ParticlesBackground
} from '@/ui/components';


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
        <AdminTopMenu />
        <AdminSidebar />
        <ParticlesBackground />

        <main className='px-2 sm:px-10 sm:w-[1080px] m-auto sm:ml-[300px] mt-20 min-h-full'>
          { children }
        </main>
      </div>
    </div>
  );
}

