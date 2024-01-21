import React from 'react';
import './Policy.css'; 

const Policy: React.FC = () => {
  return (
    <div className="policy-container">
      <h1 style={{ fontFamily: 'Poppins', fontSize: '56px' }}>ACCESSIBILITY POLICY</h1>
      <div className="policy-content">
        <div className="policy-column">
          <p style={{ fontFamily: 'Poppins', fontSize: '18px' }}>At WHEAR, we are committed to providing an accessible and user-friendly experience for all customers. We strive to meet the highest standards of accessibility and ensure that our website content is accessible to all. If you have difficulty accessing our site, please don't hesitate to contact us at the phone number or email address provided.</p>
        </div>
        <div className="policy-column">
          <p style={{ fontFamily: 'Poppins', fontSize: '18px' }}>We are dedicated to providing a unique and innovative experience for our customers. We are constantly striving to improve our services and welcome any feedback or suggestions you may have. Please feel free to reach out to us at any time.</p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
