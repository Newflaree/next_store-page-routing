// React
import { useState } from 'react';
// Next
import Image from 'next/image';
import NextLink from 'next/link';
// Components
import { ProductAddToCartBtn } from '@/ui/components';
// Utils
import { currencyFormat } from '@/utils';


export const ProductCard = ({ product }) => {
  const [ displayImage, setDisplayImage ] = useState( product.imgs[0].url );
  const [ hovered, setHovered ] = useState( false );

  return (
    <div
      className='rounded-md overflow-hidden fade-in mb-10 hover:shadow-xl transition-all hover:bg-gray-100'
      onMouseEnter={ () => setHovered( true ) }
      onMouseLeave={ () => setHovered( false ) }
    >
      <NextLink
        href={ `/productos/${ product.slug }` }
      >
        <Image
          src={ displayImage }
          alt={ product.name }
          className='w-full object-cover rounded-t'
          width={ 500 }
          height={ 500 }
          onMouseEnter={ () => setDisplayImage( product.imgs[1].url ) }
          onMouseLeave={ () => setDisplayImage( product.imgs[0].url ) }
        />
      </NextLink>

      <div className={ `flex flex-col p-3 transition-all` }>
        <NextLink
          href={ `/productos/${ product.slug }` }
          className='hover:text-cyan-600 transition-all text-start font-semibold'
        >
          { product.name }
        </NextLink>

        {
          product.price <= 0
            ? ''
            : (
              <span className='font-bold text-mupu text-end mt-3 text-lg'>
                ${ product === 0 ? '' : currencyFormat( product.price ) }
              </span>
            )
        }

        <ProductAddToCartBtn
          className='my-0 mt-2'
          product={ product }
          quantitySelector={ false }
        />
      </div>

    </div>
  );
}
