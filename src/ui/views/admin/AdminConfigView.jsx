// Components
import { Title } from '@/ui/components';
// Layouts
import { AdminLayout } from '@/ui/layouts';


export const AdminConfigView = () => {
  return (
    <AdminLayout
      pageTitle='Configuración'
    >
      <div className='h-[700px]'>
        <Title
          label='Configuración de la tienda'
        />

        <div className='mt-5 flex flex-col'>
        {/*checkbox item*/}
          <label className="inline-flex items-center cursor-pointer my-4">
            <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-600"></div>
              <span className="ms-3 text-xl font-medium">Ocultar precios</span>
          </label>
        {/*checkbox item*/}
        {/*checkbox item*/}
          <label className="inline-flex items-center cursor-pointer my-4">
            <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-600"></div>
              <span className="ms-3 text-xl font-medium">Mostrar ofertas</span>
          </label>
        {/*checkbox item*/}
        {/*checkbox item*/}
          <label className="inline-flex items-center cursor-pointer my-4">
            <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-600"></div>
              <span className="ms-3 text-xl font-medium">Mostrar disponibilidad</span>
          </label>
        {/*checkbox item*/}
        </div>
      </div>
    </AdminLayout>
  );
}

