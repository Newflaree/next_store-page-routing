// Components
import { Title } from '@/ui/components';
// Layouts
import { AdminLayout } from '@/ui/layouts';


export const AdminProductView = ({ product }) => {
  const { slug } = product;

  const currentTitle = ( slug === 'new' ) 
    ? 'Nuevo producto'
    : 'Editar Producto';

  return (
    <AdminLayout
      pageTitle={ currentTitle }
    >
      <Title label={ currentTitle } />

      <div>AdminProductView</div>
    </AdminLayout>
  );
}
