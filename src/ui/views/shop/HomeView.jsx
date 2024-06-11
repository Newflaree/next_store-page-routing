// Components
import { HomeSlider } from '@/ui/components';
// Layouts
import { ShopLayout } from '@/ui';


export const HomeView = () => {
  return (
    <ShopLayout
      pageTitle='Inicio'
    >
      <HomeSlider />
      {/*TODO: HomeVideo*/}
      {/*TODO: HomeProducts*/}
    </ShopLayout>
  );
}
