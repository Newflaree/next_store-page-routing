// React
import {
  useEffect,
  useState
} from 'react';
// Next
import { useRouter } from 'next/router';
// Next Auth
import {
  getProviders,
  getSession,
  signIn
} from 'next-auth/react';
// React Hook Form
import { useForm } from 'react-hook-form';
// Views
import { LoginView } from '../../../ui/views';
// Utils
import { validation } from '../../../utils';


const LoginPage = () => {
  const { replace, query } = useRouter();
  const [ showError, setShowError ] = useState( false );
  const [ providers, setProviders ] = useState({});
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  useEffect( () => {
    getProviders()
      .then( prov => {
        console.log({ prov });
        setProviders( prov )
      });
  }, [] );

  const onLoginUser = async ({ email, password }) => {
    setShowError( false );
    await signIn( 'credentials', { email, password } );
  }

  return <LoginView
    errors={ errors }
    handleSubmit={ handleSubmit }
    register={ register }
    validation={ validation }
  />
}


export const getServerSideProps = async ({ req, query }) => {
  const session = await getSession({ req });
  const { page = '/' } = query;

  if ( session ) {
    return {
      redirect: {
        destination: page.toString(),
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default LoginPage;
