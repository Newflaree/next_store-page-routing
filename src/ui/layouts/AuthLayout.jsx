// Next
import Image from 'next/image';
// Components
import { ParticlesBackground } from '@/ui/components';


export const AuthLayout = ({ children }) => {
  return (
    <div className='flex justify-center'>
      <div className='w-full sm:w-[350px] px-10'>
        <ParticlesBackground />

        <div
          className='flex justify-center mb-5'
        >
          <Image
            src='/logo.png'
            alt='mupütun'
            className='p-5 sm:p-0 mt-5'
            width={ 200 }
            height={ 100 }
          />
        </div>

        { children }
      </div>
    </div>
  );
}

