// Components
import {
  ProductCard,
  Title
} from '@/ui/components';
// Database


export const ProductGrid = ({ products }) => {
  return (
    <div className='px-5'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mb-20'>
        {
          products.map( product => (
            <ProductCard
              key={ product.slug }
              product={ product }
            />
          ))
        }
      </div>
    </div>
  );
}
