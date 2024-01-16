import React from 'react';
import WelcomeSection from './Welcome/WelcomeSection';
import ServiceSection from './Service/ServiceSection';
import AppSection from './App/AppSection';
import FollowUsSection from './FollowUs/FollowUs';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Home: React.FC = () => {
  return (
    <div>
      <Header/>
      <WelcomeSection />
      <ServiceSection />
      <AppSection />
      <FollowUsSection /> 
      <Footer/>
    </div>
  );
};

export default Home;
