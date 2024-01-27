import React from 'react';
import IOSIMG from '../../../../img/ios.png';
import ANDROIDIMG from '../../../../img/android.png';
import WELCOMEIMG from '../../../../img/welcome.jpg';
import './WelcomeSectionPC.css';

const WelcomeSectionPC: React.FC = () => {
  return (
    <section className="welcome-section">
      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
        <img
          src={WELCOMEIMG}
          alt=""
          style={{
            width: 'calc(100% - 144px)', 
            height: '100%',
            objectFit: 'cover',
            marginLeft: '72px',
            marginRight: '72px',
          }}
        />

        <div className="welcome-content" style={{ position: 'absolute', bottom: 0, left: 20, padding: '20px', marginLeft:'92px' }}>
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

export default WelcomeSectionPC;
