import React, { useState } from 'react';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/CloudDownload';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './AppSectionMobile.css';

const AppSectionMobile: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(2);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => ((prevSlide - 2 + 3) % 3) + 1);
  };

  return (
    <section className="app-section-mobile">
      {currentSlide === 1 && (
        <div className="app-image-container">
          <img src={require('../../../../img/Introduce.jpg')} alt="App Image" className="app-image" />
        </div>
      )}

      {currentSlide === 2 && (
        <div className="center-column-mobile">
          <h1>WHEAR APP</h1>
          <p>Discover the latest trends and elevate your style with WHEAR. Our fashion-forward boutique offers a curated collection of designer pieces that will make you stand out from the crowd. From elegant dresses to chic accessories, we have everything you need to create your perfect look. Do not miss out on this exclusive discount - shop now and save on your favorite pieces. Download THE WHEAR APP today and let our personal stylists guide you to effortless style, everyday.Discover the latest trends and elevate your style with WHEAR. Our fashion-forward boutique offers a curated collection of designer pieces that will make you stand out from the crowd. From elegant dresses to chic accessories, we have everything you need to create your perfect look. Do not miss out on this exclusive discount - shop now and save on your favorite pieces. Download THE WHEAR APP today and let our personal stylists guide you to effortless style, everyday.</p>
          <Button
            variant="contained"
            color="primary"
            href="/download-link"
            endIcon={<DownloadIcon />}
            style={{ backgroundColor: 'black', color: 'white', marginTop: '20px', alignItems:'center' }}
          >
            Download Now
          </Button>
        </div>
      )}

      {currentSlide === 3 && (
        <div className="app-image-container">
          <img src={require('../../../../img/Frame.jpg')} alt="App Image" className="app-image" />
        </div>
      )}

      <Button
        size="small"
        className="arrow-button1 back-button1"
        onClick={handlePrevSlide}
        style={{ color:'black',  position:'absolute'}}
      >
        <ArrowBackIcon />
      </Button>

      <Button
        size="small"
        className="arrow-button1 next-button1"
        onClick={handleNextSlide}
        style={{ color: 'black',  position:'absolute' }}
      >
        <ArrowForwardIcon />
      </Button>
    </section>
  );
};

export default AppSectionMobile;
