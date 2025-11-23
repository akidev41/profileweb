import React, { useRef, useState, useEffect } from 'react';
import ScrollAnimation from './ScrollAnimation';
import { getBasePath } from '../utils/paths';

const Gallery = () => {
  const basePath = getBasePath();
  
  // Photos from oldest (photo1) to newest (photo15)
  // Displayed newest first (left to right)
  const galleryImages = [
    `${basePath}/gallery/photo15.JPG`,
    `${basePath}/gallery/photo14.JPG`,
    `${basePath}/gallery/photo13.JPG`,
    `${basePath}/gallery/photo12.JPG`,
    `${basePath}/gallery/photo11.JPG`,
    `${basePath}/gallery/photo10.JPG`,
    `${basePath}/gallery/photo9.JPG`,
    `${basePath}/gallery/photo8.JPG`,
    `${basePath}/gallery/photo7.JPG`,
    `${basePath}/gallery/photo6.JPG`,
    `${basePath}/gallery/photo5.JPG`,
    `${basePath}/gallery/photo4.JPG`,
    `${basePath}/gallery/photo3.JPG`,
    `${basePath}/gallery/photo2.JPG`,
    `${basePath}/gallery/photo1.JPG`,
  ];

  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Handle mouse/touch drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches?.[0]?.pageX || 0);
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
    setIsPaused(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX || e.touches?.[0]?.pageX || 0;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume auto-scroll after a delay
    setTimeout(() => setIsPaused(false), 2000);
  };

  // Auto-scroll animation (only when not dragging and not paused)
  useEffect(() => {
    if (!scrollContainerRef.current || isPaused || isDragging) return;

    const container = scrollContainerRef.current;
    let animationFrameId;
    let startTime = null;
    const duration = 120000; // 30 seconds for full scroll
    let startScrollLeft = container.scrollLeft;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;

      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const maxScroll = scrollWidth - clientWidth;

      if (maxScroll > 0) {
        container.scrollLeft = startScrollLeft + (progress * maxScroll);
        
        // Reset when reaching the end for seamless loop
        if (container.scrollLeft >= maxScroll) {
          startScrollLeft = 0;
          startTime = null;
        }
      }

      if (!isPaused && !isDragging) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, isDragging]);

  return (
    <section className="w-full max-w-[1500px] mx-auto pt-20 pb-6 sm:pb-8 lg:py-20 px-4 sm:px-6 lg:px-0">
      <ScrollAnimation direction="bottom" className="flex flex-col gap-5 items-center px-4 sm:px-6 lg:px-20 py-4 lg:py-0 w-full">
        <div className="flex min-h-[300px] lg:min-h-[300px] items-start justify-center p-0 w-full">
          <div className="flex-1 min-h-px min-w-px relative w-full">
            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-9 items-start pl-0 pr-2.5 py-0 w-full">
              <div className="text-[#f4f1a4] text-[24px] md:text-[28px] lg:text-[32px] tracking-[-0.64px] font-[Manrope,sans-serif] font-normal leading-[1.09] w-full">
                <p>Gallery</p>
              </div>
              
              {/* Horizontal Scrolling Gallery */}
              {galleryImages.length > 0 ? (
                <div 
                  className="w-full overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing gallery-scroll-container"
                  ref={scrollContainerRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleMouseDown}
                  onTouchMove={handleMouseMove}
                  onTouchEnd={handleMouseUp}
                  style={{ 
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  <div className="flex gap-3" style={{ width: 'max-content' }}>
                    {galleryImages.map((image, index) => (
                      <div key={index} className="flex-shrink-0 h-[225px] sm:h-[300px] overflow-hidden bg-neutral-900">
                        <img
                          src={image}
                          alt={`Gallery image ${index + 1}`}
                          className="h-full w-auto object-contain pointer-events-none"
                          draggable="false"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    ))}
                    {/* Duplicate images for seamless loop */}
                    {galleryImages.map((image, index) => (
                      <div key={`duplicate-${index}`} className="flex-shrink-0 h-[225px] sm:h-[300px] overflow-hidden bg-neutral-900">
                        <img
                          src={image}
                          alt={`Gallery image ${index + 1}`}
                          className="h-full w-auto object-contain pointer-events-none"
                          draggable="false"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <p className="text-[#aaaaaa] text-[14px] md:text-[15px] lg:text-[16px] mb-4">
                    Upload your photos to <code className="text-[#f4f1a4]">/public/gallery/</code> as photo1.jpg through photo14.jpg
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Gallery;