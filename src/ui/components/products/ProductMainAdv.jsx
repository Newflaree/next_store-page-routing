// React Icons
import { IoRadioButtonOnOutline } from 'react-icons/io5';
// Components
import { Title } from '@/ui/components';


export const ProductMainAdv = ({ mainAdv }) => {
  return (
    <div classNamw='w-full'>
      <Title
        label='Principales ventajas'
        className='font-bold text-start text-2xl'
      />
      {
        mainAdv.map( ( item ) => (
          <div classNamw='w-full'>
            <IoRadioButtonOnOutline
              className='text-mupu mr-2 inline'
            />
            <span className='inline text-xl font-semibold'>{ item.advItem }</span>
          </div>
        ))
      }
    </div>
  );
}
