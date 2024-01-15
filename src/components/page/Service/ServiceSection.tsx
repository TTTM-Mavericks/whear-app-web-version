import React from 'react';
import './ServiceSection.css';

const ServiceSection: React.FC = () => {
  return (
    <section className="service-section">
      <h1 style={{ fontFamily: 'Avenir', fontSize: '80px' }}>
        OUR SPECIALTIES
      </h1>
      <div className="service-columns">
        <div className="service-column" >
          <img src={require('../../../img/service1.png')} alt="Service 1" className="service-image" />
          <p className="service-content" style={{ fontFamily: 'Avenir', fontSize: '36px', fontWeight: 'bold' }}>Custom Tailoring</p>
          <p className="service-content2" style={{ fontFamily: 'Avenir', fontSize: '20px', fontWeight: 'bold' }}>Personalized Style</p>
        </div>
        <div className="service-column">
        <p className="service-content" style={{ fontFamily: 'Avenir', fontSize: '36px', fontWeight: 'bold' }}>Unique Fitting</p>
        <p className="service-content2" style={{ fontFamily: 'Avenir', fontSize: '20px', fontWeight: 'bold' }}>Tailored to You</p>
          <img src={require('../../../img/service2.png')} alt="Service 2" className="service-image" />
        </div>
        <div className="service-column">
          <img src={require('../../../img/service3.png')} alt="Service 3" className="service-image" />
          <p className="service-content" style={{ fontFamily: 'Avenir', fontSize: '36px', fontWeight: 'bold' }}>Personal Shopper</p>
          <p className="service-content2" style={{ fontFamily: 'Avenir', fontSize: '20px', fontWeight: 'bold' }}>Style with Ease</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
