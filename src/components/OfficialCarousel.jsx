import React, { useState, useEffect } from 'react';

const OfficialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      heading: 'Heading Goes Here',
      text: 'Text Goes Here',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      heading: 'Heading Goes Here',
      text: 'Text Goes Here',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      heading: 'Heading Goes Here',
      text: 'Text Goes Here',
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

  return (
    <section className="py-6 bg-[#8B4513]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              
              {/* Left Image */}
              <div className="bg-white p-4 flex flex-col items-center">
                <div className="w-32 h-40 bg-gray-200 rounded-lg overflow-hidden mb-3">
                  <img
                    src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=300&h=400"
                    alt="Official"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-sm text-[#8B4513] mb-1">Heading Goes Here</h3>
                  <p className="text-xs text-gray-600">Text Goes Here</p>
                </div>
              </div>

              {/* Center Content */}
              <div className="bg-gray-100 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-32 bg-white rounded-lg shadow-inner mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Content Area</span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="bg-white p-4 flex flex-col items-center">
                <div className="w-32 h-40 bg-gray-200 rounded-lg overflow-hidden mb-3">
                  <img
                    src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300&h=400"
                    alt="Official"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-sm text-[#8B4513] mb-1">Heading Goes Here</h3>
                  <p className="text-xs text-gray-600">Text Goes Here</p>
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