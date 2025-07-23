import React, { useState, useEffect } from 'react';

const OfficialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Each slide has 4 images (rotate through them one-by-one)
  const slides = [
    {
      id: 1,
      images: ['', '', '', ''], // Slide 1 - add PNG/JPG/WEBP
    },
    {
      id: 2,
      images: ['', '', '', ''], // Slide 2
    },
    {
      id: 3,
      images: ['', '', '', ''], // Slide 3
    },
  ];

  // Combine all images from all slides into one flat array
  const allImages = slides.flatMap(slide => slide.images).filter(img => img);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allImages.length);
    }, 3000); // 3s per image
    return () => clearInterval(timer);
  }, [allImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-0 bg-[#8B4513] relative">
      <div className="w-full px-0">
        <div className="relative w-full flex justify-center items-center h-[420px] bg-[#f5e6d3]">

          {/* Center Image */}
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
