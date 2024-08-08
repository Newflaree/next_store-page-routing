// Next
import NextLink from 'next/link';
// Components
import { Title } from '../../components';
// Layouts
import { AuthLayout } from '../../layouts';


export const LoginView = ({
  errors,
  handleSubmit,
  onLoginUser,
  providers,
  query,
  register,
  showError,
  signIn,
  validation,
}) => {
  return (
    <AuthLayout
      pageTitle='Inicio de sesión'
    >
      <form
        onSubmit={ handleSubmit( onLoginUser ) }
      >
        <div className="flex flex-col min-h-screen pt-10 sm:pt-10">
          <Title label='Ingresar' />

          {
            showError && (
              <div>
                Correo electrónico o contraseña inválidos
              </div>
            )
          }

          <div className="flex flex-col">

            <label htmlFor="email">Correo electrónico</label>
            <input
              className={ `
                px-5
                py-2
                border
                bg-gray-200
                rounded
                ${ errors.email ? 'border-red-500' : '' }` 
              }
              type="email"
              { ...register( 'email', {
                required: 'Este campo es requerido',
                validate: validation.isEmail
              })}
            />
            {
              errors.email && <p className='mb-5 text-red-500'>{ errors.email.message }</p>
            }


            <label htmlFor="password">Contraseña</label>
            <input
              className={ `
                px-5
                py-2
                border
                bg-gray-200
                rounded
                ${ errors.password ? 'border-red-500' : '' }` 
              }
              type="password"
              { ...register( 'password', {
                required: 'Este campo es requerido',
                minLenght: { value: 6, message: 'Mínimo 6 caracteres' } 
              })}
            />
            {
              errors.password && <p className='mb-5 text-red-500'>{ errors.password.message }</p>
            }

            <button
              type='submit'
              className="btn-primary mt-5 mb-5"
            >
              Iniciar Sesión
            </button>

            {
              Object.values( providers ).map( provider => {
                if ( provider.id === 'credentials' ) return null;

                return (
                  <button
                    key={ provider.id }
                    className="w-full border border-cyan-600 text-cyan-600 py-2 rounded-md hover:bg-cyan-700 hover:text-white my-1 transition-all"
                    onClick={() => signIn(provider.id)}
                  >
                    { provider.name }
                  </button>
                )
              })
            }

            <div className="flex items-center my-5">
              <div className="flex-1 border-t border-gray-500"></div>
              <div className="px-2 text-gray-800">O</div>
              <div className="flex-1 border-t border-gray-500"></div>
            </div>

            <NextLink
              href="/auth/register" 
              className="btn-secondary text-center"
            >
              Crear una nueva cuenta
            </NextLink>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}
