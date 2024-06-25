// Views
import { AdminProductView } from '@/ui/views';
// Database
import {
  getAllProductSlugs,
  getProductBySlug,
} from '@/database';


const AdminProductPage = ({ product }) => {
  return <AdminProductView product={ product } />
}

export const getStatickPaths = async ( ctx ) => {
  const productSlugs = getAllProductSlugs();

  return {
    paths: productSlugs.map( ({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: 'blocking'
  }
}

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;

  const product = getProductBySlug( slug );

  if ( !product ) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false
      }
    }
  }

  return {
    props: {
      product,
    },
  }
}

export default AdminProductPage;
