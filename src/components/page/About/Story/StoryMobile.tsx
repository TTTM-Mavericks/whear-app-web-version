import React from 'react';
import './StoryMobile.css'; 
import storyImage from '../../../../img/about1.jpg';

const StoryMobile: React.FC = () => {
  return (
    <section className="story-section-mobile">
      <img src={storyImage} alt="Story Image" className="story-image-mobile" />
      <div className="content-mobile">
        <div className="content-column-mobile">
          <h1 style={{ fontFamily: 'Poppins', fontSize: '20px', paddingLeft:'10px' }}>
            OUR STORY
          </h1>
        </div>
        <div className="content-column2-mobile">
          <p style={{ fontFamily: 'Poppins', fontSize: '10px' }}>
            GERME: The Purpose-Driven Technology Seed Company <br />
            We are proud to announce GERME – a technology seed company with a mission to improve society through innovative technological solutions. Our focus is to create products that optimize the lifestyle sector and enhance the user's overall living experience. Join us in advancing the future!
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoryMobile;
