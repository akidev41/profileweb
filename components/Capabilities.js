import React from 'react';

const Capabilities = () => {
  return (
    <section className="w-full max-w-[1500px] mx-auto min-h-[650px] flex flex-col lg:flex-row items-start justify-center px-4 lg:px-0">
      {/* Left side - Experience */}
      <div className="flex flex-col gap-5 items-center px-4 lg:px-20 py-4 lg:py-0 w-full lg:w-[640px] mb-8 lg:mb-0">
        <div className="flex min-h-[400px] lg:min-h-[662px] items-start justify-center p-0 w-full">
          <div className="flex-1 min-h-px min-w-px relative">
            <div className="flex flex-col gap-6 lg:gap-9 items-start pl-0 pr-2.5 py-0 w-full">
              <div className="text-[#f4f1a4] text-[24px] md:text-[28px] lg:text-[32px] tracking-[-0.64px] font-[Manrope,sans-serif] font-normal leading-[1.09] w-full">
                <p>Capabilities</p>
              </div>
              
              {/* Skills */}
              <div className="flex flex-col gap-2 lg:gap-3 items-start w-full font-[Geist,sans-serif] font-normal leading-[0]">
                <div className="text-[#ffffff] text-[14px] md:text-[15px] lg:text-[16px] tracking-[-0.32px] w-full">
                  <p className="leading-[1.3]">Skills</p>
                </div>
                <div className="text-[#aaaaaa] text-[14px] md:text-[15px] lg:text-[16px] tracking-[-0.32px] w-full">
                  <p className="leading-[1.4] lg:leading-none">
                    Product strategy & planning/User experience design/Project management/Creative team coordination/Budget management/Video editing/Prototyping/Agile methodology/Ai tool optimization
                  </p>
                </div>
              </div>
              
              {/* Tools */}
              <div className="flex flex-col gap-2 lg:gap-3 items-start w-full font-[Geist,sans-serif] font-normal leading-[0]">
                <div className="text-[#ffffff] text-[14px] md:text-[15px] lg:text-[16px] tracking-[-0.32px] w-full">
                  <p className="leading-[1.3]">Tools</p>
                </div>
                <div className="text-[#aaaaaa] text-[14px] md:text-[15px] lg:text-[16px] tracking-[-0.32px] w-full">
                  <p className="leading-[1.4] lg:leading-none">
                    Figma/Premiere Pro/Illustrator/Photoshop/Javascript/Html/Css/Cursor/Notion/Office suite/Google workspace
                  </p>
                </div>
              </div>
              
              {/* Languages */}
              <div className="flex flex-col gap-2 lg:gap-3 items-start w-full font-[Geist,sans-serif] font-normal leading-[0]">
                <div className="text-[#ffffff] text-[14px] md:text-[15px] lg:text-[16px] tracking-[-0.32px] w-full">
                  <p className="leading-[1.3]">Languages</p>
                </div>
                <div className="text-[#aaaaaa] text-[14px] md:text-[15px] lg:text-[16px] tracking-[-0.32px] w-full">
                  <p className="leading-[1.4] lg:leading-none">
                    Cantonese/Native<br />
                    Japanese/Native<br />
                    English/Business Intermediate<br />
                    Mandarin/Business Intermediate<br />
                    German/Beginner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image block 2 */}
      <div className="w-full lg:flex-1 grid grid-cols-2 grid-rows-2 h-[250px] md:h-[350px] lg:h-[662px] gap-1 md:gap-2 lg:gap-0">
        <div className="[grid-area:1_/_1] overflow-clip rounded-md lg:rounded-none">
          <img
            src="/icons/capabilities1.JPG"
            alt="Capabilities image 1"
            className="w-full h-[125px] md:h-[175px] lg:h-[331px] object-cover"
          />
        </div>
        <div className="[grid-area:2_/_2] overflow-clip rounded-md lg:rounded-none h-[125px] md:h-[175px] lg:h-auto flex items-center justify-center">
          <img
            src="/icons/capabilities2.JPG"
            alt="Capabilities image 2"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Capabilities;