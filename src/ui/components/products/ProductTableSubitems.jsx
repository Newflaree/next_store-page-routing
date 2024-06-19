import { IoRadioButtonOnOutline } from 'react-icons/io5';


export const ProductTableSubitems = ({ subitems }) => {
  return (
    <ul
      className='flex flex-col'
    >
      {
        subitems.map( ( item ) => (
          <div
            key={ item.spec }
            className=''
          >
            <IoRadioButtonOnOutline
              className='text-mupu mr-2 inline-block'
              size={ 10 }
            />
            <li className='inline-block'>{ item.spec }</li>
          </div>
        ))
      }
    </ul>
  );
}
