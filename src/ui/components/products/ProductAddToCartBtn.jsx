// React
import { useState } from 'react';
// Components
import { ProductQuantitySelector } from '@/ui/components';
// State
import { useCartState } from '@/store';


export const ProductAddToCartBtn = ({ product, quantitySelector = true, className = '' }) => {
  const addProductToCart = useCartState( state => state.addProductToCart );

  const [ quantity, setQuantity ] = useState( 1 );
  const [ posted, setPosted ] = useState( false );

  const addToCart = () => {
    setPosted( true );

    const cartProduct = {
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      quantity: quantity || 1,
      image: product.imgs[0].url
    }

    addProductToCart( cartProduct );
    setPosted( false );
    setQuantity( 1 );
  }

  return (
    <>
      {
        quantitySelector && <ProductQuantitySelector
          quantity={ quantity }
          onQuantityChanged={ setQuantity }
        />
      }

      <button onClick={ addToCart } className={ `my-4 btn-primary ${ className }` }>
        Agregar al carrito
      </button>
    </>
  );
}
