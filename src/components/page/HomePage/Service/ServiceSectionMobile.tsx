import React from 'react';
import { Typography } from '@mui/material';
import './ServiceSectionMobile.css';

const ServiceSectionMobile: React.FC = () => {
  return (
    <section className="service-section-mobile">
      <Typography variant="h4" className="service-heading" sx={{ fontFamily: 'Poppins', fontSize: '36px', fontWeight: 'bold' }}>
        OUR SPECIALTIES
      </Typography>
      <div className="service-columns-mobile">
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
      </div>
    </section>
  );
};

export default ServiceSectionMobile;
