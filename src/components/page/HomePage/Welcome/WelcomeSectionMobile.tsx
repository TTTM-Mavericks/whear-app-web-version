import React from 'react';
import IOSIMG from '../../../../img/ios.png';
import ANDROIDIMG from '../../../../img/android.png';
import WELCOMEIMG from '../../../../img/welcome.jpg';
import './WelcomeSectionMobile.css';

const WelcomeSectionMobile: React.FC = () => {
  return (
    <section className="welcome-section-mobile">
      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
        <img src={WELCOMEIMG} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        
        <div className="welcome-content" style={{ position: 'absolute', bottom: 0, left: 0, padding: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '13%', marginRight: '20px' }}>
              <img src={ANDROIDIMG} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '13%' }}>
              <img src={IOSIMG} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSectionMobile;
