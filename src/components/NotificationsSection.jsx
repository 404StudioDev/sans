import React from 'react';
import { Calendar } from 'lucide-react';

const NotificationsSection = () => {
  const notifications = [
    {
      id: 1,
      text: 'एकीकृत शिक्षक शिक्षा कार्यक्रम (ITEP) बी.एड., एम.एड. हेतु प्रवेश परीक्षा का आवेदन अद्यतन',
      date: '21/07/2025',
    },
    {
      id: 2,
      text: 'विद्यालयों (B.Ed) पाठ्यक्रम हेतु आवेदनकर्ताओं के लिए डाउनलोड पोर्टल एवं सुधार (Correction) की सूचना',
      date: '21/07/2025',
    },
    {
      id: 3,
      text: 'डीएल, स्कूल ऑफ कॉरेस्पॉन्डेंस निदेशक विद्यालय एवं बुक्स लिस्ट की संबंधित अधिसूचना',
      date: '18/07/2025',
    },
    {
      id: 4,
      text: 'आचार्य संस्कृत शिक्षक प्रशिक्षण वर्ष: 2025 हेतु सूचना',
      date: '18/07/2025',
    },
  ];

  return (
    <section className="py-8" style={{ background: 'linear-gradient(to bottom, #f5e6d3, #e8d5c4)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Notifications Box */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#8B4513]">
            {/* Header */}
            <div className="bg-[#8B4513] text-white py-4 px-6">
              <h2 className="text-xl font-bold text-center">Notifications</h2>
            </div>

            {/* Content */}
            <div className="p-6" style={{ background: '#f5e6d3' }}>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start space-x-3 pb-3 border-b border-[#8B4513]/20 last:border-b-0">
                    <div className="w-2 h-2 bg-[#8B4513] rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-gray-800 text-sm leading-relaxed mb-2">
                        {notification.text}
                      </p>
                      <div className="flex items-center space-x-1 text-xs text-gray-600">
                        <Calendar size={12} />
                        <span>{notification.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationsSection;