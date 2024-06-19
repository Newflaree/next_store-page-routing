// Next
import NextLink from 'next/link';
import Image from 'next/image';
// Components
import {
  Title,
  ProductQuantitySelector
} from '@/ui/components';
// Database
import { productsDB } from '@/database';
// Layouts
import { ShopLayout } from '@/ui/layouts';
// Utils
import { currencyFormat } from '@/utils';


const productsInCart = [
  productsDB[0],
  productsDB[5],
  productsDB[3],
];

export const CartView = () => {
  const itemOnCart = 3;

  return (
    <ShopLayout
      pageTitle={ `Tienes ${ itemOnCart } artículos` }
    >

      <div
        className={`
          mt-10
          flex
          justify-center
          items-center
          mb-40
          px-10
          sm:px-0
          h-fit
        `}
      >
        <div className='flex flex-col w-[1000px]'>
          <Title label='Carro de compras' />
   
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            {/*Cart*/}
            <div className='flex flex-col mt-5'>
              <span className='text-xl'>
                Agregar más items
              </span>
              <NextLink
                href='/'
                className='underline mb-5'
              >
                Continúa comprando
              </NextLink>
              {/*Checkout*/}
              {
                productsInCart.map( product => (
                  <div
                    key={ product.slug }
                    className='flex mt-5 mb-3'
                  >
                    <Image
                      src={ product.imgs[0].url }
                      width={ 100 }
                      height={ 100 }
                      alt={ product.name }
                      className='mr-5 rounded'
                    />

                    <div>
                      <p>{ product.name }</p>
                      <p className='text-mupu'>
                        ${ currencyFormat( product.price ) }
                      </p>

                      <ProductQuantitySelector quantity={ 3 } />

                      <button className='underline mt-3'>
                        Remover
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>

            {/*Checkout*/}
            <div className='bg-white rounded-xl shadow-xl p-7 h-fit'>
              <h2 className='text-2xl mb-2'>Resumen de la Orden</h2>

              <div className='grid grid-cols-2'>
                <span>No. Productos</span>
                <span className='text-right'>3 artículos</span>

                <span>Subtotal</span>
                <span className='text-right'>$ 100</span>

                <span>Impuestos</span>
                <span className='text-right'>15%</span>

                <span className='mt-5 text-2xl'>Total</span>
                <span className='mt-5 text-2xl text-right'>$115</span>
              </div>

              <div className='mt-5 mb-2 w-full'>
                <NextLink
                  href='/verificar/direccion'
                  className='flex btn-primary justify-center'
                >
                  Checkout
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
}
