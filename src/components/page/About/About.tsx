import React from 'react';
import Story from './Story/Story';
import Image from './Image/Image';
import Policy from './Policy/Policy';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTopButton from '../ScrollToTop/ScrollToTopButton'

const Home: React.FC = () => {
  return (
    <div>
      <Header/>
      <ScrollToTopButton/>
      <Story />
      <Policy/>
      <Footer/>
    </div>
  );
};

export default Home;
