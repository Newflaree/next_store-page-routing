// Next
import NextLink from 'next/link';
// Components
import { Title } from '../../components';
// Layouts
import { AuthLayout } from '../../layouts';


export const RegisterView = () => {
  return (
    <AuthLayout
      pageTitle='Registro'
    >
      <div className="flex flex-col min-h-screen pt-10 sm:pt-10 pb-10">
        <Title label='Crear cuenta' />

        <div className="flex flex-col">

          <label htmlFor="email">Nombre de usuario</label>
          <input
            className="px-5 py-2 border bg-gray-200 rounded mb-5"
            type="text" />

          <label htmlFor="email">Correo electrónico</label>
          <input
            className="px-5 py-2 border bg-gray-200 rounded mb-5"
            type="email" />

          <label htmlFor="email">Contraseña</label>
          <input
            className="px-5 py-2 border bg-gray-200 rounded mb-5"
            type="password" />

          <label htmlFor="email">Repetir contraseña</label>
          <input
            className="px-5 py-2 border bg-gray-200 rounded mb-5"
            type="password" />

          <button
            className="btn-primary"
          >
            <NextLink href='/'>
              Crear cuenta
            </NextLink>
          </button>

          <div className="flex items-center my-5">
            <div className="flex-1 border-t border-gray-500"></div>
            <div className="px-2 text-gray-800">O</div>
            <div className="flex-1 border-t border-gray-500"></div>
          </div>

          <NextLink
            href="/auth/login" 
            className="btn-secondary text-center">
            Ya tengo una cuenta
          </NextLink>
        </div>
      </div>
    </AuthLayout>
  );
}
