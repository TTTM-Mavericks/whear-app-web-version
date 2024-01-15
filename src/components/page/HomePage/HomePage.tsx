import React from 'react';
import WelcomeSection from '../Welcome/WelcomeSection';
import ServiceSection from '../Service/ServiceSection';
import AppSection from '../App/AppSection';
import FollowUsSection from '../FollowUs/FollowUs';

const Home: React.FC = () => {
  return (
    <div>
      <WelcomeSection />
      <ServiceSection />
      <AppSection />
      <FollowUsSection /> 
    </div>
  );
};

export default Home;
