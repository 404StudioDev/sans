import React from 'react';
import { motion } from 'framer-motion';

const OfficersStaff = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-[#fef8f3] to-[#e8d5c4]">
      <div className="max-w-5xl mx-auto rounded-2xl shadow-xl border border-[#d9bfa4] backdrop-blur-md bg-white/80 p-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#5c2e0d]">बिहार संस्कृत शिक्षा बोर्ड के अधिकारी एवं कर्मचारी</h2>
          <div className="mt-3 flex justify-center items-center gap-2">
            <div className="w-10 h-0.5 bg-[#5c2e0d] opacity-60"></div>
            <div className="w-3 h-3 bg-[#5c2e0d] opacity-60 rounded-full"></div>
            <div className="w-10 h-0.5 bg-[#5c2e0d] opacity-60"></div>
          </div>
        </div>

        {/* Officer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Officer Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-center space-y-4"
          >
            <div className="w-32 h-32 rounded-full bg-[#fff] border-4 border-[#a47148] mx-auto shadow-lg"></div>
            <div className="bg-white p-4 rounded-xl border-2 border-[#d9bfa4] shadow">
              <p className="text-[#5c2e0d] font-semibold text-sm">अध्यक्ष – श्री मृत्युंजय कुमार झा</p>
            </div>
            <p className="text-sm text-gray-700">परीक्षा नियंत्रक – श्री उपेन्द्र कुमार</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center space-y-4"
          >
            <div className="w-32 h-32 rounded-full bg-[#fff] border-4 border-[#a47148] mx-auto shadow-lg"></div>
            <div className="bg-white p-4 rounded-xl border-2 border-[#d9bfa4] shadow">
              <p className="text-[#5c2e0d] font-semibold text-sm">सचिव – श्री नीरज कुमार</p>
            </div>
            <p className="text-sm text-gray-700">प्रधान सहायक – श्री भवनाथ झा</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default OfficersStaff;
