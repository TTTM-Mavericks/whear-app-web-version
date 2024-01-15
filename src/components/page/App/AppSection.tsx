import React from 'react';
import './AppSection.css';

const AppSection: React.FC = () => {
  return (
    <section className="app-section">
      <div className="left-column">
        <img src={require('../../../img/Introduce.jpg')} alt="Left Image" className="app-image" />
      </div>
      <div className="center-column">
        <h1>THE WHEAR APP</h1>
        <p>Discover the latest trends and elevate your style with WHEAR. Our fashion-forward boutique offers a curated collection of designer pieces that will make you stand out from the crowd. From elegant dresses to chic accessories, we have everything you need to create your perfect look. Don't miss out on this exclusive discount - shop now and save on your favorite pieces. Download THE WHEAR APP today and let our personal stylists guide you to effortless style, everyday.</p>
      </div>
      <div className="right-column">
        <img src={require('../../../img/Frame.jpg')} alt="Right Image" className="app-image" />
      </div>
    </section>
  );
};

export default AppSection;
