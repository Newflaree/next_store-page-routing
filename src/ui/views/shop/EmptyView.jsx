// Next
import NextLink from 'next/link';
// React Icons
import { IoCartOutline } from 'react-icons/io5';
// Layouts
import { ShopLayout } from '@/ui/layouts';


export const EmptyView = () => {
  return (
    <ShopLayout
      pageTitle='Tu carro está vacio'
    >
      <div className="flex justify-center items-center h-[700px]">

        <IoCartOutline size={ 80 } className="mx-5" />

        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold">
            Tu carrito está vacío
          </h1>

          <NextLink 
            href='/'
            className="text-mupu mt-2 text-4xl"
          >
            Regresar
          </NextLink>

        </div>

        
      </div>
    </ShopLayout>
  );
}
