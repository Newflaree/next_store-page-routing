// Views
import { AdminProductView } from '@/ui/views';
// TODO: Delete Database after SSR
// Database
import { productsDB } from '@/database';

const AdminProductPage = () => {
  const product = productsDB[0];
  return <AdminProductView product={ product } />
}

export default AdminProductPage;
