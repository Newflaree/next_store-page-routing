// Database
import { productsDB } from '@/database';
// Views
import { CombosView } from '@/ui/views';

const products = productsDB.filter( product => product.cate === 'combos' );

const ConbosPage = () => {
  return <CombosView products={ products } />
}

export default ConbosPage;
