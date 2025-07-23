import React, { useState, useEffect } from 'react';

const OfficialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      images: ['', '', '', ''], // Add your image URLs here
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
    <section className="bg-[#4e1e0c] py-6">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 items-center">

          {/* Left Static Panel */}
          <div className="bg-[#f5e6d3] text-center rounded-lg py-6 px-4">
            <img
              src="/your-left-image.jpg" // Replace with your actual image path
              alt="Left"
              className="w-full h-60 object-contain mx-auto"
            />
            <h3 className="text-lg font-bold text-[#4e1e0c] mt-4">Heading Goes Here</h3>
            <p className="text-[#4e1e0c] text-sm">Text Goes Here</p>
          </div>

          {/* Center Carousel Panel */}
          <div className="bg-white h-full rounded-lg shadow-lg border-4 border-[#f5e6d3] p-4">
            <div className="grid grid-cols-2 gap-4">
              {currentImages.map((img, index) => (
                <div
                  key={index}
                  className="w-full h-40 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden border"
                >
                  {img ? (
                    <img
                      src={img}
                      alt={`Slide ${currentSlide + 1} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">Image {index + 1}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 space-x-2">
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

          {/* Right Static Panel */}
          <div className="bg-[#f5e6d3] text-center rounded-lg py-6 px-4">
            <img
              src="/your-right-image.jpg" // Replace with your actual image path
              alt="Right"
              className="w-full h-60 object-contain mx-auto"
            />
            <h3 className="text-lg font-bold text-[#4e1e0c] mt-4">Heading Goes Here</h3>
            <p className="text-[#4e1e0c] text-sm">Text Goes Here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialCarousel;
