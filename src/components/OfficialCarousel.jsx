import React, { useState, useEffect } from 'react';

const OfficialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides with 4 images each
  const slides = [
    {
      id: 1,
      images: ['', '', '', ''],
    },
    {
      id: 2,
      images: ['', '', '', ''],
    },
    {
      id: 3,
      images: ['', '', '', ''],
    },
  ];

  const allImages = slides.flatMap(slide => slide.images).filter(img => img);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [allImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-0 bg-[#8B4513] relative">
      <div className="w-full px-0">
        <div className="relative w-full flex justify-center items-center h-[420px] bg-[#f5e6d3]">

          {/* LEFT Photo Frame */}
          <div className="w-[15%] h-[85%] bg-white border-4 border-[#8B4513] rounded-lg shadow-lg flex items-center justify-center mx-2">
            <img
              src=""
              alt="Left Frame"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* CENTER Carousel Image */}
          <div className="w-[60%] h-[85%] bg-white rounded-lg overflow-hidden border-4 border-gray-200 shadow-lg flex items-center justify-center">
            {allImages[currentSlide] ? (
              <img
                src={allImages[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="text-gray-400 text-xl">Image {currentSlide + 1}</div>
            )}
          </div>

          {/* RIGHT Photo Frame */}
          <div className="w-[15%] h-[85%] bg-white border-4 border-[#8B4513] rounded-lg shadow-lg flex items-center justify-center mx-2">
            <img
              src=""
              alt="Right Frame"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-white ${
                  currentSlide === index
                    ? 'bg-white'
                    : 'bg-transparent hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialCarousel;
