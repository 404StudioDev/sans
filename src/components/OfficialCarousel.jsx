import React, { useState, useEffect } from 'react';

const OfficialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      images: ['', '', '', ''], // Add your image URLs (png/jpg/webp) here
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentImages = slides[currentSlide].images;

  return (
    <section className="py-8 bg-[#8B4513] relative">
      <div className="w-full flex justify-center items-center">
        <div className="relative bg-[#f5e6d3] w-[90%] md:w-[70%] rounded-xl p-6 shadow-xl">
          
          {/* Center Carousel with 4 Images */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {currentImages.map((img, index) => (
              <div
                key={index}
                className="w-full h-48 bg-white rounded-lg overflow-hidden flex items-center justify-center border-2 border-gray-300"
              >
                {img ? (
                  <img
                    src={img}
                    alt={`Slide ${currentSlide + 1} - Img ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400">Image {index + 1}</span>
                )}
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full border border-white ${
                  currentSlide === index ? 'bg-white' : 'bg-transparent'
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
