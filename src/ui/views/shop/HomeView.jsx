// Components
import {
  HomeProductGrid,
  HomeSlider
// Layouts
} from '@/ui/components';
import { ShopLayout } from '@/ui';


export const HomeView = () => {
  return (
    <ShopLayout
      pageTitle='Inicio'
    >
      <HomeSlider />
      {/*TODO: HomeVideo*/}
      {/*TODO: HomeProducts*/}
      <HomeProductGrid />
    </ShopLayout>
  );
}
