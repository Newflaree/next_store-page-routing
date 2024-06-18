// React
import { useState } from 'react';
// React Icons
import {
  IoAddCircleOutline,
  IoRemoveCircleOutline
} from 'react-icons/io5';


export const ProductQuantitySelector = ({ quantity }) => {
  const [ count, setCount ] = useState( quantity );

  const onQuantityChanged = ( value = 1 ) => {
    if ( count + value < 1 ) return;

    setCount( count + value );
  }

  return (
    <div className='flex'>
      <button onClick={ () => onQuantityChanged( -1 ) }>
        <IoRemoveCircleOutline size={ 30 } />
      </button>

      <span className='w-20 mx-3 px-5 bg-gray-100 text-center rounded m-auto'>
        { count }
      </span>

      <button onClick={ () => onQuantityChanged( 1 ) }>
        <IoAddCircleOutline size={ 30 } />
      </button>
    </div>
  );
}
