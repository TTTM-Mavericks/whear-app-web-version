import React from 'react';
import './ServiceSection.css';

const ServiceSection: React.FC = () => {
  return (
    <section className="service-section">
      <h1 style={{ fontFamily: 'Poppins', fontSize: '56px' }}>
        OUR SPECIALTIES
      </h1>
      <div className="service-columns">
        <div className="service-column" >
          <img src={require('../../../../img/service1.png')} alt="Service 1" className="service-image" />
          <p className="service-content" style={{ fontFamily: 'Poppins', fontSize: '36px', fontWeight: 'bold', marginBottom: '5px' }}>Custom Tailoring</p>
          <p className="service-content2" style={{ fontFamily: 'Poppins', fontSize: '20px', marginTop: '5px' }}>Personalized Style</p>
        </div>
        <div className="service-column">
          <p className="service-content" style={{ fontFamily: 'Poppins', fontSize: '36px', fontWeight: 'bold', marginBottom: '5px' }}>AI Stylist</p>
          <p className="service-content2" style={{ fontFamily: 'Poppins', fontSize: '20px', marginTop: '5px' }}>Tailored to You</p>
          <img src={require('../../../../img/service2.png')} alt="Service 2" className="service-image" />
        </div>
        <div className="service-column">
          <img src={require('../../../../img/service3.png')} alt="Service 3" className="service-image" />
          <p className="service-content" style={{ fontFamily: 'Poppins', fontSize: '36px', fontWeight: 'bold', marginBottom: '5px' }}>Personal Shopper</p>
          <p className="service-content2" style={{ fontFamily: 'Poppins', fontSize: '20px', marginTop: '5px' }}>Style with Ease</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
