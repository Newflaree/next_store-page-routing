// Next
import NextLink from 'next/link';
// Layouts
import { ShopLayout } from '@/ui/layouts';


export const NotFoundView = () => {
  return (
    <ShopLayout
      pageTitle='Página no encontrada'
    >
      <div
        className={`
          flex
          flex-col-reverse
          md:flex-row
          min-h-screen
          w-full
          justify-center
          items-center
          align-middle
        `}
      >
        <div className='text-center px-5 mx-5'>
          <h2 className={ `antialiased text-9xl text-mupu` }>
            404
          </h2>

          <p className='font-semibold text-xl'>
            Whoops! Lo sentimos mucho.
          </p>

          <p className='font-light'>
            <span>Puedes regresar al </span>

            <NextLink
              href='/'
              className='font-normal hover:underline transition-all text-mupu hover:text-cyan-600'
            >
              Inicio
            </NextLink>
          </p>
        </div>
      </div>
    </ShopLayout>
  )
}
