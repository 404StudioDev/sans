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
    <section className="py-8 bg-[#8B4513]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 min-h-[300px]">
              
              {/* Left Image */}
              <div className="bg-white p-6 flex flex-col items-center justify-center">
                <div className="w-40 h-48 bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-md">
                  <img
                    src={currentSlideData.leftImage}
                    alt="Official"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-sm text-[#8B4513] mb-2">{currentSlideData.leftHeading}</h3>
                  <p className="text-xs text-gray-600">{currentSlideData.leftText}</p>
                </div>
              </div>

              {/* Center Content */}
              <div className="bg-gray-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-64 h-40 bg-white rounded-lg shadow-inner flex items-center justify-center border-2 border-gray-200">
                    <span className="text-gray-400 text-lg font-medium">Content Area</span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="bg-white p-6 flex flex-col items-center justify-center">
                <div className="w-40 h-48 bg-gray-200 rounded-lg overflow-hidden mb-4 shadow-md">
                  <img
                    src={currentSlideData.rightImage}
                    alt="Official"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-sm text-[#8B4513] mb-2">{currentSlideData.rightHeading}</h3>
                  <p className="text-xs text-gray-600">{currentSlideData.rightText}</p>
                </div>
              </div>

            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-[#8B4513]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialCarousel;