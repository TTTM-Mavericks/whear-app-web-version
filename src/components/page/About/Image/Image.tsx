import React, { useEffect } from 'react';
import './Image.css';

const Image: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const image = document.querySelector('.story-image2') as HTMLImageElement | null;

      if (image) {
        const scrollPosition = window.scrollY;
        const scale = 3 - scrollPosition / 1000;
        image.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="image-section">
      <div className="background-img">
        <img
          src={require('../../../../img/about2.jpg')}
          alt="Story Image2"
          className="story-image2"
        />
      </div>
    </section>
  );
};

export default Image;
