import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-10 px-4 bg-dark-bg text-dark-text">
      <div className="max-w-[1048px] mx-auto flex flex-col gap-[40px] items-center justify-center">
        {/* Quote Section */}
        <div className="flex flex-col gap-9 items-center w-full">
          <div className="flex flex-col gap-3 items-center w-full">
            <div className="text-[24px] md:text-[28px] lg:text-[32px] tracking-[-0.64px] text-[#f4f1a4] font-normal leading-[1.09] font-[Manrope,sans-serif] text-center">
              <p className="whitespace-pre lg:whitespace-nowrap">
                <span className="block lg:inline">"Every act of creation </span>
                <span className="block lg:inline">is first an act of destruction."</span>
              </p>
            </div>
            <div className="text-[24px] tracking-[-0.48px] text-[#aaaaaa] font-normal leading-[1.1] font-[Geist,sans-serif] text-center">
              <p className="whitespace-pre">Pablo Picasso</p>
            </div>
          </div>
        </div>
        {/* Contact Info and Animation */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-0">
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-2.5 items-start text-[18px] md:text-[20px] lg:text-[24px] tracking-[-0.48px] font-[Geist,sans-serif] font-normal leading-[1.1] text-left">
            <div className="text-[#aaaaaa]">Lets connect</div>
            <div className="text-white">
              <a href="https://www.linkedin.com/in/aki-sawada/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">LinkedIn</a>
            </div>
            <div className="text-white">
              <a href="https://github.com/akidev41" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">Github</a>
            </div>
            <div className="text-white">
              <a href="https://open.spotify.com/playlist/4Ag2MYQAMH8MsdmkWhMvem?si=042c920721de4094" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">Playlist</a>
            </div>
          </div>
          {/* Right: Star Animation */}
          <div className="h-[180px] w-[250px] md:h-[200px] md:w-[280px] lg:h-[227.9px] lg:w-[319.5px] flex items-center justify-center relative">
            <div className="flex-none h-[130px] w-[180px] md:h-[150px] md:w-[210px] lg:h-[173px] lg:w-[243px] rotate-[15deg] flex items-center justify-center">
              <img
                src="/icons/star_animation.gif"
                alt="Star Animation"
                className="block max-w-none w-full h-full"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;