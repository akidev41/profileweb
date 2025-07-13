import React from 'react';

const Gallery = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 lg:px-0 py-20">
      <div className="flex flex-col gap-9 items-start pl-0 pr-2.5 py-0 w-full">
        <div className="text-[#f4f1a4] text-[32px] tracking-[-0.64px] font-[Manrope,sans-serif] font-normal leading-[1.09] w-full">
          <p>Gallery</p>
        </div>
        
        {/* Gallery content placeholder */}
        <div className="flex flex-col gap-5 items-start w-full">
          <div className="text-gray-400 text-lg">
            <p>Coming soon!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;