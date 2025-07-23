// App.jsx

import React from 'react';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import Navigation from './components/Navigation';
import GreatPersonalities from './components/GreatPersonalities';
import NotificationsSection from './components/NotificationsSection';
import OfficialCarousel from './components/OfficialCarousel';
import OfficersStaff from './components/OfficersStaff';

const App = () => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #f5e6d3, #e8d5c4)' }}>
      <Header />
      <TopBanner />
      <Navigation />
       <OfficialCarousel />
      <OfficersStaff />
      <GreatPersonalities />
      <NotificationsSection />
      
     
      
    </div>
  );
};

export default App;
