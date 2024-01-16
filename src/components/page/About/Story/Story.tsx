import React from 'react';
import './Story.css';

const Story: React.FC = () => {
  return (
    <section className="story-section">
      <div className="content-column">
        <h1 style={{ fontFamily: 'Avenir', fontSize: '80px' }}>
          OUR STORY.
        </h1>
        <p style={{ fontFamily: 'Avenir', fontSize: '18px' }}>WHEAR is a Fashion Designer Boutique based in Vietnam that offers high-quality products and exceptional customer service through their online platform and physical locations. Our journey started with a passion for fashion and a desire to revolutionize the industry. We are committed to providing a unique and innovative experience for our customers, building a social network, optimizing the user experience, and developing AI technology for building personal wardrobes. We prioritize security and privacy, continuously update fashion data, improve outfit suggestions, and enhance search features. We believe in creating a creative community where people can share knowledge, tips, and inspire each other. Thank you for supporting us on our journey!</p>
      </div>
      <div className="background-col">
      <img
          src={require('../../../../img/about1.png')} 
          alt="Story Image"
          className="story-image"
        />
      </div>
    </section>
  );
};

export default Story;
