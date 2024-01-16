import React from 'react';
import Story from './Story/Story';
import Image from './Image/Image';
import Policy from './Policy/Policy';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Home: React.FC = () => {
  return (
    <div>
      <Header/>
      <Story />
      <Image/>
      <Policy/>
      <Footer/>
    </div>
  );
};

export default Home;
