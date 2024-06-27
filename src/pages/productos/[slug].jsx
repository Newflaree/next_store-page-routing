// Database
import {
  getAllProductSlugs,
  getProductBySlug
} from '../../database';
// Views
import { ProductView } from '../../ui/views';


const ProductPage = ({ product }) => {
  return <ProductView
    product={ product }
  />
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
  const { slug = '' } = params;

  const product = getProductBySlug( slug );

  if ( !product ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
  }
}


export default ProductPage;
