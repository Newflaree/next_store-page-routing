// Componets
import { Title } from '@/ui/components';
// Layouts
import { ShopLayout } from '@/ui/layout';


export const ContactView = () => {
  return (
    <ShopLayout
      pageTitle='Contacto'
    >
      <div className="flex flex-col pt-10 sm:pt-10 sm:mx-20 pb-10">

        <Title label='Contáctanos' />

        <div className="flex flex-col">

          <label htmlFor="email">Nombre</label>
          <input
            className="px-5 py-2 border bg-gray-100 rounded mb-5"
            type="text"
          />

          <label htmlFor="email">Apellido</label>
          <input
            className="px-5 py-2 border bg-gray-100 rounded mb-5"
            type="text"
          />

          <label htmlFor="email">Correo Electrónico</label>
          <input
            className="px-5 py-2 border bg-gray-100 rounded mb-5"
            type="text"
          />

          <label htmlFor="email">Asunto</label>
          <input
            className="px-5 py-2 border bg-gray-100 rounded mb-5"
            type="text"
          />

          <label htmlFor="email">Mensaje</label>
          <textarea
            className="px-5 py-2 border bg-gray-100 rounded mb-10"
            rows={ 5 }
          />

          <button
            className="btn-primary"
          >
            Enviar Mensaje
          </button>
        </div>
      </div>
    </ShopLayout>
  );
}
