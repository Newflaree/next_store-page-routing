// Components
import {
  HomeSlider,
  HomeSliderMobile,
  HomeVideo,
  ProductGrid,
  Title
} from '@/ui/components';
// Layouts
import { ShopLayout } from '@/ui/layouts';


export const HomeView = ({ products }) => {
  return (
    <ShopLayout
      pageTitle='Inicio'
    >
      <HomeSlider />

      <HomeSliderMobile />

      <Title label='Videos destacados' />
      <HomeVideo />

      <Title label='Nuestros productos destacados' />
      <ProductGrid products={ products } />
    </ShopLayout>
  );
}
