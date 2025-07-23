import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GreatPersonalities = () => {
  const scrollRef = useRef(null);

  const personalities = [
    {
      id: 1,
      name: 'कालिदास',
      image: 'https://images.pexels.com/photos/8923962/pexels-photo-8923962.jpeg?auto=compress&cs=tinysrgb&w=200&h=250',
    },
    {
      id: 2,
      name: 'चाणक्य',
      image: 'https://images.pexels.com/photos/8923963/pexels-photo-8923963.jpeg?auto=compress&cs=tinysrgb&w=200&h=250',
    },
    {
      id: 3,
      name: 'पाणिनि',
      image: 'https://images.pexels.com/photos/8923964/pexels-photo-8923964.jpeg?auto=compress&cs=tinysrgb&w=200&h=250',
    },
    {
      id: 4,
      name: 'वाल्मीकि',
      image: 'https://images.pexels.com/photos/8923965/pexels-photo-8923965.jpeg?auto=compress&cs=tinysrgb&w=200&h=250',
    },
    {
      id: 5,
      name: 'व्यास',
      image: 'https://images.pexels.com/photos/8923966/pexels-photo-8923966.jpeg?auto=compress&cs=tinysrgb&w=200&h=250',
    },
    {
      id: 6,
      name: 'तुलसीदास',
      image: 'https://images.pexels.com/photos/8923967/pexels-photo-8923967.jpeg?auto=compress&cs=tinysrgb&w=200&h=250',
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8" style={{ background: 'linear-gradient(to bottom, #f5e6d3, #e8d5c4)' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#8B4513] mb-4" style={{ color: '#8B4513' }}>
            "संस्कृत के महानायक"
          </h2>
        </div>

        {/* Brown background container */}
        <div className="bg-[#8B4513] p-4 rounded-lg">
          {/* Scrollable Container */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <ChevronLeft size={20} className="text-[#8B4513]" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <ChevronRight size={20} className="text-[#8B4513]" />
            </button>

            {/* Personalities Grid */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {personalities.map((person) => (
                <div key={person.id} className="flex-shrink-0">
                  <div className="w-32 h-40 bg-white rounded-lg shadow-md overflow-hidden border-4 border-[#D2691E]">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default GreatPersonalities;