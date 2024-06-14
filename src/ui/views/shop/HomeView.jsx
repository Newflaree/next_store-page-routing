// Components
import {
  HomeProductGrid,
  HomeSlider,
  HomeSliderMobile,
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
      <HomeSliderMobile />
      <HomeVideo />
      <HomeProductGrid />
    </ShopLayout>
  );
}
