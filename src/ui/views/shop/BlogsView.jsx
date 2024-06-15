// Components
import {
  BlogsGrid,
  Title
} from '@/ui/components';
// Layouts
import { ShopLayout } from '@/ui/layouts';


export const BlogsView = ({ blogs }) => {
  return (
    <ShopLayout
      pageTitle='Blogs'
    >
      <div className='mt-10'>
        <Title label='Nuestros artículos' />

        <BlogsGrid blogs={ blogs } />
      </div>
    </ShopLayout>
  );
}
