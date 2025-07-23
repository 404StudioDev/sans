// App.jsx

import React from 'react';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import GreatPersonalities from './components/GreatPersonalities';
import NotificationsSection from './components/NotificationsSection';
import OfficialCarousel from './components/OfficialCarousel';
import OfficersStaff from './components/OfficersStaff';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <TopBanner />
      <Navigation />
      <MainContent />
      <GreatPersonalities />
      <NotificationsSection />
      <OfficialCarousel />
      <OfficersStaff />
      <Footer />
    </div>
  );
};

export default App;
