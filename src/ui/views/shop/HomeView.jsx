// Components
import {
  HomeProductGrid,
  HomeSlider,
  HomeVideo
// Layouts
} from '@/ui/components';
import { ShopLayout } from '@/ui';


export const HomeView = () => {
  return (
    <ShopLayout
      pageTitle='Inicio'
    >
      <HomeSlider />
      <HomeVideo />
      <HomeProductGrid />
    </ShopLayout>
  );
}
