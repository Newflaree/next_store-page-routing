// Components
import {
  ProductDetailTable,
  ProductMainAdv,
  ProductSlideshow,
  ProductQuantitySelector
} from '@/ui/components';
// Layouts
import { ShopLayout } from '@/ui/layouts';
// Utils
import { currencyFormat } from '@/utils';


export const ProductView = ({ product }) => {
  return (
    <ShopLayout
      pageTitle='ProductPage'
    >
      <div className='mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3 pt-10'>
        {/*SlideShow*/}
        <div className='col-span-1 md:col-span-2'>
          {/*Mobile Slideshow*/}
          {/*
          <ProductMobileSlideshow
            title={ product.name }
            images={ product.imgs }
            className='block md:hidden'
          />
            */}

          {/*Desktop Slideshow*/}
          <ProductSlideshow
            title={ product.name }
            images={ product.imgs }
            className='hidden md:block'
          />
        </div>
        {/*Details*/}
        <div className='col-span-1 px-5'>
          <h1 className={ `antialiased font-bold text-xl mb-2` }>
            { product.name }
          </h1>

          <p className='text-3xl mb-5 text-mupu'>
            ${ currencyFormat( product.price ) }
          </p>

          {/* Count Selector*/}
          <ProductQuantitySelector
            quantity={ 1 }
          />

          <button className='btn-primary my-5'>
            Agregar al carrito
          </button>

          <h3 className='font-bold text-sm'>Descripción</h3>
          <p className='font-light'>
            { product.desc }
          </p>
        </div>

        <div className='w-[1080px] mt-20'>
          {/*Main Adv*/}
          <ProductMainAdv mainAdv={ product.mainAdv } />

          {/*Tech Specs*/}
          <div className='w-[900px] mt-20'>
            <h2 className='font-bold text-2xl'>Especificaciones Técnicas</h2>

            <ProductDetailTable
              techSpecs={ product.techSpecs }
            />
          </div>
        </div>
      </div>
    </ShopLayout>
  );
}
