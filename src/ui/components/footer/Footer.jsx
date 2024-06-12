// Next
import NextLink from 'next/link';
import Image from 'next/image';
// React Icons
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io5';

export const Footer = () => {
  return (
    <footer className='sm:w-[1080px] m-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10 mt-40 text-center mx-5 '>
        <div className='mb-5 mx-4'>
          <h2 className={ `text-xl mb-5` }>Sobre nosotros</h2>
          <p className='text-xs'>
            Somos una empresa emergente, con equipo de profesionales de espíritu emprendedor, cuyo objetivo es modernizar la operación de la industria en CHILE, expandiendo el acceso a las nuevas tecnologías, brindando acompañamiento en la implementación de estas a quienes sean parte de este grupo humano.
          </p>
            <Image
              src='/logo.png'
              alt='mupütun'
              className='sm:p-0 m-auto'
              width={ 125 }
              height={ 90 }
            />
        </div>

        <div className='mb-5 mx-4'>
          <h2 className={ `text-xl mb-5` }>Contáctanos</h2>

          <div className='flex flex-col'>
            <span className='cursor-pointer mb-2 hover:text-cyan-600 transition-all text-mupu'>info@muputun.cl</span>
            <span className='cursor-pointer mb-2 hover:text-cyan-600 transition-all text-mupu'>+56 9 87754953</span>
          </div>
          <span></span>

          <h2 className={ `text-xl my-5` }>Contáctanos</h2>

          <div className='w-[150px] m-auto'>
            <div className='grid grid-cols-3 gap-10'>
              <a href='/' target='_blank'>
                <IoLogoFacebook
                  size={ 30 }
                  className='mb-2 hover:text-cyan-600 transition-all text-mupu'
               />
              </a>
              <a href='/' target='_blank'>
                <IoLogoInstagram
                  size={ 30 }
                  className='cursor-pointer mb-2 hover:text-cyan-600 transition-all text-mupu'
                />
              </a>
              <a href='/' target='_blank'>
                <IoLogoLinkedin
                  size={ 30 }
                  className='cursor-pointer mb-2 hover:text-cyan-600 transition-all text-mupu'
                />
              </a>
            </div>
          </div>
          <span></span>
        </div>

        <div className='mb-5 mx-4'>
          <h2 className={ `text-xl mb-5` }>Nuestra alianza</h2>
          <p className='text-xs mb-4'>
            Distribuidores oficiales de nuestros amigos mettatec en CHILE, pioneros en dar soluciones
  tecnológicas de punta, a la medida de tus necesidades. convirtiéndose en tu aliado estratégico el cual puede ayudarte a afrontar de mejor manera el presente de tu negocio.
          </p>
            <Image
              src='/logo-metta.png'
              alt='mettatec'
              className='sm:p-0 m-auto'
              width={ 125 }
              height={ 90 }
            />
        </div>
      </div>

      <div className='flex w-full justify-center text-xs mb-10 hover:text-cyan-600 transition-all'>
        <NextLink href='/'>
          <span className={ `antialiased font-bold` }>NWFL </span>
          <span>| Desarrollo de Software </span>
          <span>© { new Date().getFullYear() }</span>
        </NextLink>
      </div>
    </footer>
  );
}
