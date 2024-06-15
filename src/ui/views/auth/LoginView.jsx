// Next
import NextLink from 'next/link';
// Components
import { Title } from '@/ui/components';
// Layouts
import { AuthLayout } from '@/ui/layouts';



export const LoginView = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col min-h-screen pt-10 sm:pt-10">
        <Title label='Ingresar' />

        <div className="flex flex-col">

          <label htmlFor="email">Correo electrónico</label>
          <input
            className="px-5 py-2 border bg-gray-200 rounded mb-5"
            type="email" />


          <label htmlFor="email">Contraseña</label>
          <input
            className="px-5 py-2 border bg-gray-200 rounded mb-5"
            type="email" />

          <button
            className="btn-primary"
          >
            <NextLink href='/'>
              Iniciar Sesión
            </NextLink>
          </button>


          <div className="flex items-center my-5">
            <div className="flex-1 border-t border-gray-500"></div>
            <div className="px-2 text-gray-800">O</div>
            <div className="flex-1 border-t border-gray-500"></div>
          </div>

          <NextLink
            href="/auth/register" 
            className="btn-secondary text-center">
            Crear una nueva cuenta
          </NextLink>

        </div>
      </div>
    </AuthLayout>
  );
}
