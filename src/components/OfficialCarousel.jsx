 import React, { useState, useEffect } from 'react';

const OfficialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      leftImage: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=300&h=400',
      rightImage: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300&h=400',
      leftHeading: 'Heading Goes Here',
      leftText: 'Text Goes Here',
      rightHeading: 'Heading Goes Here',
      rightText: 'Text Goes Here',
    },
    {
      id: 2,
      leftImage: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=300&h=400',
      rightImage: 'https://images.pexels.com/photos/1181535/pexels-photo-1181535.jpeg?auto=compress&cs=tinysrgb&w=300&h=400',
      leftHeading: 'Heading Goes Here',
      leftText: 'Text Goes Here',
      rightHeading: 'Heading Goes Here',
      rightText: 'Text Goes Here',
    },
    {
      id: 3,
      leftImage: 'https://images.pexels.com/photos/1181536/pexels-photo-1181536.jpeg?auto=compress&cs=tinysrgb&w=300&h=400',
      rightImage: 'https://images.pexels.com/photos/1181537/pexels-photo-1181537.jpeg?auto=compress&cs=tinysrgb&w=300&h=400',
      leftHeading: 'Heading Goes Here',
      leftText: 'Text Goes Here',
      rightHeading: 'Heading Goes Here',
      rightText: 'Text Goes Here',
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

  const currentSlideData = slides[currentSlide];

  return (
    <section className="py-0 bg-[#8B4513] relative">
      <div className="w-full px-0">
        {/* Carousel Container - Full Width */}
        <div className="relative w-full">
          <div className="grid grid-cols-3 gap-0 h-[420px]">
            
            {/* Left Image Panel */}
            <div className="bg-[#f5e6d3] flex flex-col items-center justify-center p-8 border-r-4 border-[#8B4513]">
              <div className="w-48 h-64 bg-white rounded-lg overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={currentSlideData.leftImage}
                  alt="Official"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="font-bold text-lg text-[#8B4513] mb-2">{currentSlideData.leftHeading}</h3>
                <p className="text-sm text-gray-700">{currentSlideData.leftText}</p>
              </div>
            </div>

            {/* Center Content Panel */}
            <div className="bg-[#f5e6d3] flex items-center justify-center p-12 relative">
              <div className="w-full h-full bg-white rounded-lg shadow-inner flex items-center justify-center border-4 border-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <span className="text-gray-500 text-xl font-medium">Content Area</span>
                </div>
              </div>
            </div>

            {/* Right Image Panel */}
            <div className="bg-[#f5e6d3] flex flex-col items-center justify-center p-8 border-l-4 border-[#8B4513]">
              <div className="w-48 h-64 bg-white rounded-lg overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={currentSlideData.rightImage}
                  alt="Official"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="font-bold text-lg text-[#8B4513] mb-2">{currentSlideData.rightHeading}</h3>
                <p className="text-sm text-gray-700">{currentSlideData.rightText}</p>
              </div>
            </div>

          </div>

          {/* Navigation Dots - Positioned at bottom center */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={w-4 h-4 rounded-full transition-all duration-300 border-2 border-white ${
                  currentSlide === index 
                    ? 'bg-white' 
                    : 'bg-transparent hover:bg-white/50'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialCarousel;