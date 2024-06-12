// Components
import { HomeProductCard } from '@/ui/components';
// Database
import { homeProducts } from '@/database';


const products = homeProducts;

export const HomeProductGrid = () => {
  return (
    <div>
      <h1 className='text-4xl text-center font-bold mb-10'>
        Nuestros productos destacados
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mb-20'>
        {
          homeProducts.map( product => (
            <HomeProductCard
              key={ product.slug }
              product={ product }
            />
          ))
        }
      </div>
    </div>
  );
}
