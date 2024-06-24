// React
import { useEffect } from 'react';
// Next.js
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
// React Icons
import {
  IoCogOutline,
  IoCreateOutline,
  IoLogInOutline,
  IoPersonOutline,
  IoPricetagOutline,
  IoTicketOutline,
} from 'react-icons/io5';
//TODO: Store


export const AdminSidebar = () => {
  const currentPath = usePathname();

  return (
    <div>
      <nav
        className={
          clsx(`
            hidden
            sm:block
            mt-10
            fixed
            p-5
            left-0
            top-0
            w-[300px]
            h-screen
            bg-white
            z-10
            shadow-2xl
            transform
            transition-all
            duration-300
            `
          )
        }
      >
        {/* List Item */}
        <NextLink
          href='/admin'
          className={`
            flex
            items-center
            mt-5
            p-2
            hover:bg-gray-100 rounded transition-all
          `}
        >
          <IoPersonOutline
            size={ 25 }
            className={ `transition-all ${ currentPath === '/admin' ? 'text-mupu' : '' }` }
          />
          <span className={ `ml-3 transition-all ${ currentPath === '/admin' ? 'text-mupu' : '' }` }>
            Inicio
          </span>
        </NextLink>
        {/* List Item */}
        {/* List Item */}
        <NextLink
          href='/admin/orders'
          className={`
            flex
            items-center
            mt-5
            p-2
            hover:bg-gray-100 rounded transition-all
          `}
        >
          <IoTicketOutline
            size={ 25 }
            className={ `transition-all ${ currentPath === '/admin/orders' ? 'text-mupu' : '' }` }
          />
          <span className={ `ml-3 transition-all ${ currentPath === '/admin/orders' ? 'text-mupu' : '' }` }>
            Pedidos
          </span>
        </NextLink>
        {/* List Item */}
        {/* List Item */}
        <NextLink
          href='/admin/products'
          className={`
            flex
            items-center
            mt-5
            p-2
            hover:bg-gray-100 rounded transition-all
          `}
        >
          <IoPricetagOutline
            size={ 25 }
            className={ `transition-all ${ currentPath === '/admin/products' ? 'text-mupu' : '' }` }
          />
          <span className={ `ml-3 transition-all ${ currentPath === '/admin/products' ? 'text-mupu' : '' }` }>
            Productos
          </span>
        </NextLink>
        {/* List Item */}
        {/* List Item */}
        <NextLink
          href='/admin/blogs'
          className={`
            flex
            items-center
            mt-5
            p-2
            hover:bg-gray-100 rounded transition-all
          `}
        >
          <IoCreateOutline
            size={ 25 }
            className={ `transition-all ${ currentPath === '/admin/blogs' ? 'text-mupu' : '' }` }
          />
          <span className={ `ml-3 transition-all ${ currentPath === '/admin/blogs' ? 'text-mupu' : '' }` }>
            Blogs
          </span>
        </NextLink>
        {/* List Item */}
        {/* List Item */}
        <NextLink
          href='/admin/config'
          className={`
            flex
            items-center
            mt-5
            p-2
            hover:bg-gray-100 rounded transition-all
          `}
        >
          <IoCogOutline
            size={ 25 }
            className={ `transition-all ${ currentPath === '/admin/config' ? 'text-mupu' : '' }` }
          />
          <span className={ `ml-3 transition-all ${ currentPath === '/admin/config' ? 'text-mupu' : '' }` }>
            Configurar Tienda
          </span>
        </NextLink>
        {/* List Item */}

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
          href='/'
          className={`
            flex
            items-center
            mt-5
            p-2
            hover:bg-gray-100 rounded transition-all
          `}
        >
          <IoLogInOutline size={ 25 } />
          <span className='ml-3'>Volver a la tienda</span>
        </NextLink>
        {/* List Item */}
      </nav>
    </div>
  );
}
