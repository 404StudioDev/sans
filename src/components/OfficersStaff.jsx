import React from 'react';

const OfficersStaff = () => {
  return (
    <section className="py-8" style={{ background: 'linear-gradient(to bottom, #f5e6d3, #e8d5c4)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Container */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#8B4513]">
            
            {/* Header */}
            <div className="bg-[#8B4513] text-white py-4 px-6">
              <h2 className="text-lg font-bold text-center">
                बिहार संस्कृत शिक्षा बोर्ड के अधिकारी एवं कर्मचारी
              </h2>
              {/* Decorative line */}
              <div className="flex justify-center mt-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-0.5 bg-white/60"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="w-4 h-0.5 bg-white/60"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="w-8 h-0.5 bg-white/60"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Left Side */}
                <div className="text-center">
                  {/* Profile Circle */}
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 border-4 border-[#8B4513] shadow-lg"></div>
                  
                  {/* Details Box */}
                  <div className="bg-[#f5e6d3] p-4 rounded-lg border border-[#8B4513]">
                    <p className="text-[#8B4513] font-semibold text-sm">
                      अध्यक्ष - श्री नीतीश कुमार जी
                    </p>
                  </div>
                  
                  {/* Additional Info */}
                  <div className="mt-3 text-xs text-gray-600">
                    <p>परीक्षा नियंत्रक - श्री उमेश कुमार</p>
                  </div>
                </div>

                {/* Right Side */}
                <div className="text-center">
                  {/* Profile Circle */}
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 border-4 border-[#8B4513] shadow-lg"></div>
                  
                  {/* Details Box */}
                  <div className="bg-[#f5e6d3] p-4 rounded-lg border border-[#8B4513]">
                    <p className="text-[#8B4513] font-semibold text-sm">
                      सचिव - श्री जतिन कुमार
                    </p>
                  </div>
                  
                  {/* Additional Info */}
                  <div className="mt-3 text-xs text-gray-600">
                    <p>प्रशासन सहायक - श्री सत्यनाथ झा</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficersStaff;