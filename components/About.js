import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full max-w-[1280px] mx-auto">
      <div className="bg-neutral-950 min-h-[540px] flex flex-col lg:flex-row items-start justify-between pb-[100px] lg:pb-[200px] pt-10 px-6 lg:px-[40px] relative w-full">
        <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between min-h-px p-0 gap-8 lg:gap-0">
          <div className="flex flex-col gap-6 lg:gap-9 items-start w-full lg:w-[717px]">
            {/* About Header */}
            <div className="flex flex-col justify-center relative w-full">
              <h2 className="text-[32px] font-normal leading-[1.09] text-[#f4f1a4] tracking-[-0.64px] font-[Manrope,sans-serif]">
                About
              </h2>
            </div>
            
            {/* Content */}
            <div className="flex flex-col gap-3 items-start w-full">
              <div className="flex flex-col justify-center relative">
                <h3 className="text-[32px] font-normal leading-[1.09] text-[#f4f1a4] tracking-[-0.64px] font-[Manrope,sans-serif] whitespace-nowrap">
                  Sawada (Lee) Aki
                </h3>
              </div>
              <div className="flex flex-col justify-center leading-[1.1] min-w-full relative text-[24px] tracking-[-0.48px] font-[Geist,sans-serif] font-normal text-[#f4f1a4]">
                <p className="mb-0">
                  Born and raised in Hong Kong, currently based in Tokyo. My cross-cultural path has shaped how I approach every project—always seeking connections others might miss.
                </p>
                <p className="mb-0">&nbsp;</p>
                <p className="mb-0">
                  I specialize in turning ambitious ideas into meaningful reality, regardless of their form of expression.
                </p>
                <p className="mb-0">&nbsp;</p>
                <p>
                  Outside of work, I love running through Tokyo's streets, cooking new dishes, and discovering great music.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="h-[180px] w-[165px] lg:h-[250px] lg:w-[230px] relative flex items-center justify-center mx-auto lg:mx-0 lg:-ml-8">
            <div className="h-[180px] w-[165px] lg:h-[250px] lg:w-[230px] rotate-[345deg]">
              <img
                src="/icons/hand_animation.gif"
                alt="Hand animation"
                className="w-full h-full object-contain scale-120"
                style={{ transform: 'scale(1.2)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;