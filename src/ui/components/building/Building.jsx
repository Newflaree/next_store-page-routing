// React Icons
import { IoHammerOutline } from 'react-icons/io5';


export const Building = () => {
  return (
    <div className='flex justify-center items-center h-[700px]'>
      <IoHammerOutline
        size={ 80 }
        className='mx-5 text-mupu'
      />

      <div
        className='flex flex-col items-center'
      >
        <h1 className='text-4xl font-semibold'>
          En construcción
        </h1>
      </div>
    </div>
  );
}
