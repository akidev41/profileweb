import React from 'react';

const Experience = () => {
  return (
    <section className="w-full max-w-[1500px] mx-auto min-h-[800px] flex flex-col lg:flex-row px-4 lg:px-0">
      {/* Left side - Project Section */}
      <div className="flex-1 flex flex-col items-start mb-8 lg:mb-0">
        <div className="h-[300px] lg:h-[400px] w-full lg:w-[640px] overflow-hidden">
          <img
            src="/icons/experience.JPG"
            alt="Experience background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right side - Experience */}
      <div className="flex flex-col gap-5 items-start px-4 lg:px-20 py-4 lg:py-0 w-full lg:w-[640px]">
        <div className="flex min-h-[300px] lg:min-h-[400px] items-start justify-center p-0 w-full lg:w-[449px]">
          <div className="flex-1 min-h-px min-w-px relative">
            <div className="flex flex-col gap-6 lg:gap-9 items-start pl-0 pr-2.5 py-0 w-full">
              <div className="text-[#f4f1a4] text-[24px] md:text-[28px] lg:text-[32px] tracking-[-0.64px] font-[Manrope,sans-serif] font-normal leading-[1.09] min-w-full">
                <p>Experience</p>
              </div>
              
              {/* First Experience */}
              <div className="flex flex-col gap-2 lg:gap-3 items-start w-full font-[Geist,sans-serif] font-normal leading-[0]">
                <div className="text-[#ffffff] text-[14px] md:text-[15px] lg:text-[16px] tracking-[-0.32px] w-full">
                  <p className="leading-[1.3]">Product Manager</p>
                </div>
                <div className="text-[#aaaaaa] text-[14px] md:text-[15px] lg:text-[16px] tracking-[-0.32px] w-full">
                  <p className="leading-[1.4] lg:leading-none mb-3">
                    Led AI-driven medical product development from concept to launch, managing cross-functional teams and navigating regulatory requirements.
                  </p>
                  <p className="leading-[1.4] lg:leading-none">
                    Working at the intersection of AI technology and patient care, I built product roadmaps while conducting user interviews with healthcare professionals. This helped me translate complex medical requirements into clear features that prioritized both compliance and user experience.
                  </p>
                </div>
              </div>
              
              {/* Second Experience */}
              <div className="flex flex-col gap-2 lg:gap-3 items-start w-full font-[Geist,sans-serif] font-normal leading-[0]">
                <div className="text-[#ffffff] text-[14px] md:text-[15px] lg:text-[16px] tracking-[-0.32px] w-full">
                  <p className="leading-[1.3]">Production Manager</p>
                </div>
                <div className="text-[#aaaaaa] text-[14px] md:text-[15px] lg:text-[16px] tracking-[-0.32px] w-full">
                  <p className="leading-[1.4] lg:leading-none mb-3">
                    Managed end-to-end production workflows for multiple advertisement campaigns, coordinating creative teams and logistics from pre-production through delivery.
                  </p>
                  <p className="leading-[1.4] lg:leading-none">
                    Managing concurrent projects taught me systematic coordination while preserving creative vision. I developed scheduling frameworks and maintained clear communication to keep projects on track and within budget.
                  </p>
                </div>
              </div>
              
              {/* Button */}
              <a 
                href="https://www.linkedin.com/in/aki-sawada/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#273026] flex gap-2.5 items-center justify-center p-[10px] hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div className="text-[#ffffff] text-[14px] tracking-[-0.14px] font-[Geist,sans-serif] font-normal leading-[1.3] whitespace-nowrap">
                  <p>LinkedIn</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;