// Components
import { Title } from '../../components';
// Layouts
import { AdminLayout } from '../../layouts';


export const AdminProductView = ({ product }) => {
  return (
    <AdminLayout
      pageTitle={ product.name }
    >
      <Title label={ product.name } />
      <div>AdminProductView</div>
    </AdminLayout>
  );
}
