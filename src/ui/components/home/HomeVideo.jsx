export const HomeVideo = () => {
  return (
    <div className='mb-20'>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-3xl p-4">
          <video 
            controls 
            className="w-full h-auto rounded-lg shadow-2xl"
          >
            <source src="https://res.cloudinary.com/newflare/video/upload/v1716473380/demos/muputun/curvpqd1psufcd7uyuy2.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
      </div>
    </div>
  );
}
