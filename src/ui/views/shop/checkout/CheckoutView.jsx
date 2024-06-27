// Next.js
import NextLink from 'next/link';
import Image from 'next/image';
// Components
import {
  Title,
} from '../../../components';
// Seed
import { productsDB} from '../../../../database';
// Layouts
import { ShopLayout } from '../../../layouts';


const productsInCart = [
  productsDB[0],
  productsDB[1],
  productsDB[2],
];

export const CheckoutView = () => {
  return (
    <ShopLayout
      pageTitle='Verificar pedido'
    >
      <div
        className={`
          flex
          justify-center
          items-center
          mb-40
          px-10
          sm:p -0
          mt-10
        `}
      >
        <div className='flex flex-col w-[1000px]'>
          <Title label='Verificar Orden' />
   
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            {/*Cart*/}
            <div className='flex flex-col mt-5'>
              <span className='text-xl'>
                Ajustar elementos
              </span>
              <NextLink
                href='/cart'
                className='underline mb-5'
              >
                Editar carrito
              </NextLink>
              {/*Checkout*/}
              {
                productsInCart.map( product => (
                  <div
                    key={ product.slug }
                    className='flex mt-5'
                  >
                    <Image
                      src={ product.imgs[ 0 ].url }
                      width={ 100 }
                      height={ 100 }
                      alt={ product.name }
                      className='mr-5 rounded'
                      style={{
                        width: '100px',
                        height: '100px'
                      }}
                    />

                    <div>
                      <p>{ product.name }</p>
                      <p>${ product.price } x 3</p>
                      <p className='font-bold'>Subtotal: ${ product.price  * 3 }</p>
                    </div>
                  </div>
                ))
              }
            </div>

            {/*Checkout*/}
            <div className='bg-white rounded-xl shadow-xl p-7'>
              <h2 className='text-2xl mb-2 font-bold'>Dirección de Entrega</h2>

              <div className='mb-10'>
                <p className='text-xl'>Nombre de pruebas</p>
                <p>Av. La Random</p>
                <p>Col. Centro</p>
                <p>Alcaldía Cuant</p>
                <p>Ciudad Aleatoria</p>
                <p>CP 123123</p>
                <p>+569 12345678</p>
              </div>

              <div className='w-full h-0.5 rounded bg-gray-200 mb-10' />

              <h2 className='text-2xl mb-2 font-bold'>Resumen de la Orden</h2>

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
                <p className='mb-5'>
                  <span className='text-xs'>
                    Al hacer click en 'Confirmar Orden', aceptas nuestros <a href='#' className='underline'> términos y condiciones</a> y <a href='#' className='underline'>política de privacidad</a>
                  </span>
                </p>

                <NextLink
                  href='/pedidos/1234'
                  className='flex btn-primary justify-center'
                >
                  Confirmar Orden
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
}
