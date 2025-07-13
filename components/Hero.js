import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950 flex justify-between items-center p-4 lg:p-6">
        <div 
          className="text-[20px] lg:text-[24px] font-normal leading-[0] text-[#f4f1a4] tracking-[-0.48px] font-[Geist,sans-serif]"
        >
          Sawada Aki
        </div>
      </nav>
      
      {/* Hero Section Spacer */}
      <div className="pt-20 lg:pt-36 w-full"></div>
    </>
  );
};

export default Hero; 