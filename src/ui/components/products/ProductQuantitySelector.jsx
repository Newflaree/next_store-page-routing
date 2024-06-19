// React
import { useState } from 'react';
// React Icons
import {
  IoAddCircleOutline,
  IoRemoveCircleOutline
} from 'react-icons/io5';


export const ProductQuantitySelector = ({
  onQuantityChanged,
  quantity
}) => {
  const [ count, setCount ] = useState( quantity );

  const onValueChanged = ( value = 1 ) => {
    if ( quantity + value < 1 ) return;

    onQuantityChanged( quantity + value );
  }

  return (
    <div className='flex'>
      <button onClick={ () => onValueChanged( -1 ) }>
        <IoRemoveCircleOutline size={ 30 } />
      </button>

      <span className='w-20 mx-3 px-5 bg-gray-100 text-center rounded m-auto'>
        { quantity }
      </span>

      <button onClick={ () => onValueChanged( 1 ) }>
        <IoAddCircleOutline size={ 30 } />
      </button>
    </div>
  );
}
