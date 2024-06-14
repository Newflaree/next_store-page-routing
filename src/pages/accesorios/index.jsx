// Database
import { productsDB } from '@/database';
// Views
import { AccesoriesView } from '@/ui/views';


const products = productsDB.filter( product => product.cate === 'acce' );

const AccesoriesPage = () => {
  return <AccesoriesView products={ products } />
}

export default AccesoriesPage;
