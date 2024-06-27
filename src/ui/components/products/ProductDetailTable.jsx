// Components
import { ProductTableSubitems } from '../../components';


export const ProductDetailTable = ({ techSpecs }) => {
  if ( !techSpecs ) return <></>

  return (
    <table className='table-fixed w-full border mt-8 shadow-xl'>
      <thead className='bg-mupu text-white'>
        <tr className='border'>
          <th className="w-1/4 ... p-2">Escpecificación</th>
          <th className="w-1/2 ...">Detalle</th>
        </tr>
      </thead>

      <tbody className='bg-white'>
        {
          techSpecs.map( ( item ) => (
            <tr className='border'>
              <td className='pl-4 font-bold border'>{ item.primary }</td>
              <td className=' flex flex-col p-4 '>
                <ProductTableSubitems subitems={ item.secondary } />
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
