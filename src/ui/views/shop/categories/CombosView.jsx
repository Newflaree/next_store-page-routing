// Componets
import {
  ProductGrid,
  SubTitle,
  Title
} from '@/ui/components';
// Layouts
import { ShopLayout } from '@/ui/layouts';


export const CombosView = ({ products }) => {
  return (
    <ShopLayout
      pageTitle='Combos'
    >
      <div className='mt-10'>
        <Title
          label='Combos müputun'
          className='text-mupu'
        />

        <div>
          <p className='py-4 font-light'>
            Nuestros Dispositivos GNSS X5 ofrecen una precisión incomparable al convertir señales GPS, Glonass, Galileo y Beidou en ubicaciones terrestres exactas. Con capacidad de múltiples constelaciones, garantizan un posicionamiento superior, ideal para navegación vehicular, mapeo detallado y aplicaciones que exigen alta precisión en cualquier entorno como la topografía.
          </p>
        </div>

        <div className='mt-4'>
          <SubTitle
            label='Aprovechas nuestros combos'
          />


          <div className=''>
            <ProductGrid products={ products } />
          </div>
        </div>
      </div>

    </ShopLayout>
  );
}