// Components
import {
  HomeProductCard,
  Title
} from '@/ui/components';
// Database
import { homeProducts } from '@/database';


const products = homeProducts;

export const HomeProductGrid = () => {
  return (
    <div>
      <Title label='Nuestros productos destacados' />

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
