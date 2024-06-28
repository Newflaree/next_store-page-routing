// Next
import Image from 'next/image';
import NextLink from 'next/link';


export const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-lg border border-gray-200 rounded-lg max-w-sm mb-5">
          <Image
            className='rounded-t-lg'
            src={ blog.img }
            alt={ blog.title }
            width={ 400 }
            height={ 100 }
          />

          <div className="p-5">
              <a href="#">
                <h5 className="font-bold text-xl tracking-tight mb-2 text-mupu">
                  { blog.title }
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 text-xs">
                { blog.desc }
              </p>

              <NextLink
                className='text-white bg-mupu hover:bg-cyan-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center'
                href={ `/blogs/${ blog.slug }` }
              >
                Leer más
              </NextLink>
          </div>
      </div>
    </div>
  );
}
