// Components
import { Title } from '@/ui/components';
// Layouts
import { AdminLayout } from '@/ui/layouts';


export const AdminProductView = ({ product }) => {
  const { slug } = product.slug;

  return (
    <AdminLayout
      pageTitle={ product.name }
    >
      <Title label={ product.name } />
      <div>AdminProductView</div>
    </AdminLayout>
  );
}
