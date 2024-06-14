// Components
import {
  HomeProductGrid,
  HomeSlider,
  HomeSliderMobile,
  HomeVideo
} from '@/ui/components';
// Layouts
import { ShopLayout } from '@/ui/layouts';


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
