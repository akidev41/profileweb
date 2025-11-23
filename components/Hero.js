import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950 flex justify-between items-center px-4 py-8 sm:px-6 sm:py-10 lg:px-6 lg:py-10">
        <h1 
          className="text-[24px] md:text-[28px] lg:text-[32px] font-normal leading-[0] text-[#f4f1a4] tracking-[-0.48px] font-[Geist,sans-serif] px-0 md:px-0"
        >
          Sawada Aki
        </h1>
      </nav>
      
      {/* Hero Section Spacer */}
      <div className="pt-10 sm:pt-12 lg:pt-36 w-full"></div>
    </>
  );
};

export default Hero; 