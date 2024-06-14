// Database
import { productsDB } from '@/database';
// Views
import { GNSSView } from '@/ui/views';


const products = productsDB.filter( product => product.cate === 'gnss-x5' );

const GNSSPage = () => {
  return <GNSSView products={ products } />
}

export default GNSSPage;
