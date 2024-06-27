// Next
import NextLink from 'next/link';
import Image from 'next/image';
// Components
import {
  Title,
  ProductsInCart,
  OrderSummary
} from '../../components';
// Layouts
import { ShopLayout } from '../../layouts';
// Store
import { useCartState } from '../../../store';
// Utils
import { currencyFormat } from '../../../utils';



export const CartView = () => {
  const cart = useCartState( state => state.cart  );
  const totalItemsInCart = useCartState( state => state.getTotalItems() );
  const removeProduct = useCartState( state => state.removeProduct );

  return (
    <ShopLayout
      pageTitle={ `Tienes ${ totalItemsInCart } artículos` }
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
              <ProductsInCart />

            </div>

            {/*Checkout*/}
            <div className='bg-white rounded-xl shadow-xl p-7 h-fit'>
              <h2 className='text-2xl mb-2'>Resumen de la Orden</h2>

              <OrderSummary />

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
