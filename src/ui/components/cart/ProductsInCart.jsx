// React
import {
  useEffect,
  useState
} from 'react';
// Next
import Image from 'next/image';
import NextLink from 'next/link';
// Components
import { ProductQuantitySelector } from '@/ui/components';
// Store
import { useCartState } from '@/store';


export const ProductsInCart = () => {
  const updateProductQuantity = useCartState( state => state.updateProductQuantity );
  const removeProduct = useCartState( state => state.removeProduct );
  const productsInCart = useCartState( state => state.cart );

  const [ loaded, setLoaded ] = useState( false );

  useEffect( () => {
    setLoaded( true );
  }, [] );

  if ( !loaded ) return <p>Cargando...</p>

  return (
    <div>
      {
        productsInCart.map( ( product ) => (
          <div
            key={ product.slug }
            className='flex mb-5'
          >
            {/* TODO: ProductImage*/}
            <Image
              src={ product.image }
              width={ 120 }
              height={ 100 }
              alt={ product.name }
              className='mr-5 rounded'
            />

            <div>
              <NextLink
                href={ `/productos/${ product.slug }` }
                className='hover:underline cursor-pointer'
              >
                { product.name }
              </NextLink>

              <p>${ product.price }</p>

              <ProductQuantitySelector 
                quantity={ product.quantity } 
                onQuantityChanged={ 
                  quantity => updateProductQuantity( product, quantity ) 
                }
              />

              <button 
                className='underline mt-3'
                onClick={ () => removeProduct( product ) }
              >
                Remover
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
}
