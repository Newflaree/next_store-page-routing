// React
import { useState } from 'react';
// Components
import { ProductQuantitySelector } from '@/ui/components';
// State
import { useCartState } from '@/store';


export const ProductAddToCartBtn = ({ product }) => {
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
      quantity: quantity,
      image: product.imgs[0].url
    }

    console.log( cartProduct );

    addProductToCart( cartProduct );
    setPosted( false );
    setQuantity( 1 );
  }

  return (
    <>
      <ProductQuantitySelector
        quantity={ quantity }
        onQuantityChanged={ setQuantity }
      />

      <button onClick={ addToCart } className='btn-primary my-5'>
        Agregar al carrito
      </button>
    </>
  );
}
