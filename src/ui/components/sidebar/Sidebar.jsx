import NextLink from 'next/link';
import clsx from 'clsx';
// React Icons
import {
  IoCloseOutline,
  IoLogInOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoTicketOutline,
  IoSearchOutline,
} from 'react-icons/io5';
// Store
import { useUIStore } from '../../../store';


export const Sidebar = () => {
  const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen );
  const closeMenu = useUIStore( state => state.closeSideMenu );

  return (
    <div className='z-50 fixed'>
      {/* Background */}
      {
        isSideMenuOpen && (
          <div
            className={`
              fixed
              top-0
              left-0
              w-screen
              h-screen
              z-10
              bg-black
              opacity-30
            `}
          />
        )
      }

      {/* Blur */}
      {
        isSideMenuOpen && (
          <div
            onClick={ closeMenu }
            className={`
              fade-in
              fixed
              top-0
              left-0
              w-screen
              h-screen
              z-10
              backdrop-filter
              backdrop-blur-sm
            `}
          />
        )
      }

      {/* Sidemenu */}
      <nav
        className={
          clsx(`
            fixed
            p-5
            right-0
            top-0
            w-[300px]
            h-screen
            bg-white
            z-20
            shadow-2xl
            transform
            transition-all
            duration-300
            `,
            {
              "translate-x-full": !isSideMenuOpen
            }
          )
        }
      >
        <IoCloseOutline
          size={ 50 }
          className='absolute top-5 right-5 cursor-pointer'
          onClick={ () => closeMenu() }
        />

        <div className='relative mt-14'>
          <IoSearchOutline
            size={ 20 }
            className='absolute top-2 left-2'
          />

          <input
            type='text'
            placeholder='Buscar'
            className={`
              w-full
              bg-gray-50
              rounded
              pl-10
              py-1
              pr-10
              border-b-2
              text-xl
              border-gray-200
              focus:outline-none
              focus:border-blue-500
              transition-all
            `}
          />
        </div>

        {/* List Item */}
        <NextLink
          href='/'
          onClick={ closeMenu }
          className={`
            flex
            items-center
            mt-5
            p-2
            hover:bg-gray-100 rounded transition-all
          `}
        >
          <IoPersonOutline size={ 25 } />
          <span className='ml-3'>Perfil</span>
        </NextLink>
        {/* List Item */}
        {/* List Item */}
        <NextLink
          href='/pedidos'
          onClick={ closeMenu }
          className={`
            flex
            items-center
            mt-5
            p-2
            hover:bg-gray-100 rounded transition-all
          `}
        >
          <IoTicketOutline size={ 25 } />
          <span className='ml-3'>Mis pedidos</span>
        </NextLink>
        {/* List Item */}
        {/* List Item */}
        <NextLink
          href='/auth/login'
          onClick={ closeMenu }
          className={`
            flex
            items-center
            mt-5
            p-2
            hover:bg-gray-100 rounded transition-all
          `}
        >
          <IoLogInOutline size={ 25 } />
          <span className='ml-3'>Cerrar sesión</span>
        </NextLink>
        {/* List Item */}
        {/*
        <NextLink
          href='/'
          onClick={ closeMenu }
          className={`
            flex
            items-center
            mt-5
            p-2
            hover:bg-gray-100 rounded transition-all
          `}
        >
          <IoLogOutOutline size={ 25 } />
          <span className='ml-3'>Salir</span>
        </NextLink>
        */}

        <div
          className={`
            w-full
            h-px
            bg-gray-200
            my-10
          `}
        />

        {/* List Item */}
        <NextLink
          href='/admin'
          onClick={ closeMenu }
          className={`
            flex
            items-center
            mt-5
            p-2
            hover:bg-gray-100 rounded transition-all
          `}
        >
          <IoPeopleOutline size={ 25 } />

          <span className='ml-3'>Administrar tienda</span>
        </NextLink>
        {/* List Item */}
      </nav>
    </div>
  );
}
