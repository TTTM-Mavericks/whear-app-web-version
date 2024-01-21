import React from 'react';
import './Story.css';
import storyImage from '../../../../img/about1.jpg'; 

const Story: React.FC = () => {
  return (
    <section className="story-section">
      <img src={storyImage} alt="Story Image" className="story-image" />
      <div className='content'>
      <div className="content-column">
        <h1 style={{ fontFamily: 'Poppins', fontSize: '80px' }}>
          OUR STORY
        </h1>
      </div>
      <div className="content-column2">
        <p style={{ fontFamily: 'Poppins', fontSize: '18px' }}>
        GERME: The Purpose-Driven Technology Seed Company <br/>
        We are proud to announce GERME – a technology seed company with a mission to improve society through innovative technological solutions. Our focus is to create products that optimize the lifestyle sector and enhance the user's overall living experience. Join us in advancing the future!        </p>
      </div>
      </div>
    </section>
  );
};

export default Story;
