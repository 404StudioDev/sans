import React, { useState, useEffect } from 'react';

const OfficialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <section className="bg-[#8B4513] py-6">
      <div className="flex justify-center items-center h-[450px]">

        {/* Left Photo Frame */}
        <div className="w-[180px] bg-[#f5e6d3] rounded-md shadow-lg border-2 border-white p-4 flex flex-col items-center mr-4">
          <div className="w-[120px] h-[150px] bg-gray-300 rounded-md overflow-hidden shadow-md">
            <img
              src=""
              alt="Left"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-center text-[#8B4513] font-bold mt-4 text-sm">Heading Goes Here</h3>
          <p className="text-center text-xs text-gray-600">Text Goes Here</p>
        </div>

        {/* Center Image */}
        <div className="w-[60%] h-[90%] bg-white rounded-lg overflow-hidden border-4 border-gray-200 shadow-2xl flex items-center justify-center">
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

        {/* Right Photo Frame */}
        <div className="w-[180px] bg-[#f5e6d3] rounded-md shadow-lg border-2 border-white p-4 flex flex-col items-center ml-4">
          <div className="w-[120px] h-[150px] bg-gray-300 rounded-md overflow-hidden shadow-md">
            <img
              src=""
              alt="Right"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-center text-[#8B4513] font-bold mt-4 text-sm">Heading Goes Here</h3>
          <p className="text-center text-xs text-gray-600">Text Goes Here</p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 space-x-3">
        {allImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-white ${
              currentSlide === index
                ? 'bg-white'
                : 'bg-transparent hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default OfficialCarousel;
