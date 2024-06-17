// Next
import Image from 'next/image';


export const AdminTopMenu = () => {
  return (
    <nav className='top-0 flex px-5 justify-between items-center w-full z-20 border-solid border-2 border-b bg-white fixed'>
      <div>
        <Image
          src='/logo.png'
          alt='mupütun'
          className='p-2 sm:p-0'
          width={ 150 }
          height={ 75 }
        />
      </div>
    </nav>
  );
}
