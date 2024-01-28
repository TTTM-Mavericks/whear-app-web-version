import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './ServiceSectionMobile.css';

const ServiceSectionMobile: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => ((prevSlide - 2 + 3) % 3) + 1);
  };
  return (
    <section className="service-section-mobile">
      <Typography variant="h4" className="service-heading" sx={{ fontFamily: 'Poppins', fontSize: '36px', fontWeight: 'bold' }}>
        OUR SPECIALTIES
      </Typography>
      <div className="service-columns-mobile">
      {currentSlide === 1 && (
        <div className="service-column-mobile">
            <div className="service-content-mobile">
            <Typography variant="h5" className="service-title-mobile" sx={{ fontFamily: 'Poppins', fontSize: '24px', fontWeight: 'bold' }}>
              Custom Tailoring
            </Typography>
            <Typography variant="body1" className="service-description-mobile">
              Personalized Style
            </Typography>
          </div>
          <img src={require('../../../../img/service1.png')} alt="Service 1" className="service-image-mobile" />
        </div>
        )}

      {currentSlide === 2 && (
        <div className="service-column-mobile">
          <div className="service-content-mobile">
            <Typography variant="h5" className="service-title-mobile" sx={{ fontFamily: 'Poppins', fontSize: '24px', fontWeight: 'bold' }}>
              AI Stylist
            </Typography>
            <Typography variant="body1" className="service-description-mobile">
              Tailored to You
            </Typography>
          </div>
          <img src={require('../../../../img/service2.png')} alt="Service 2" className="service-image-mobile" />
        </div>
        )}

      {currentSlide === 3 && (
        <div className="service-column-mobile">
        <div className="service-content-mobile">
            <Typography variant="h5" className="service-title-mobile" sx={{ fontFamily: 'Poppins', fontSize: '24px', fontWeight: 'bold' }}>
              Personal Shopper
            </Typography>
            <Typography variant="body1" className="service-description-mobile">
              Style with Ease
            </Typography>
          </div>
          <img src={require('../../../../img/service3.png')} alt="Service 3" className="service-image-mobile" />
        </div>
        )}
      </div>

      <Button
        variant="outlined"
        size="small"
        className="arrow-button2 back-button2"
        onClick={handlePrevSlide}
        style={{ color: 'black', borderColor: 'black', position: 'absolute', left: 0, top:'50%' }}
      >
        <ArrowBackIcon />
      </Button>

      <Button
        variant="outlined"
        size="small"
        className="arrow-button2 next-button2"
        onClick={handleNextSlide}
        style={{ color: 'black', borderColor: 'black', position: 'absolute', right: 0,top:'50%' }}
      >
        <ArrowForwardIcon />
      </Button>
    </section>
  );
};

export default ServiceSectionMobile;
