// Layouts
import { ShopLayout } from '../../layouts';


export const BlogBySlugView = () => {
  const title = 'Blog Title';

  return (
    <ShopLayout pageTitle={ title }>
      <div className='pt-10'>BlogBySlugView</div>
    </ShopLayout>
  );
}
