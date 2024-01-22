// import React from 'react';
// import './WelcomeSection.css';
// import { Link } from "react-router-dom";

// const WelcomeSection: React.FC = () => {
//   return (
//     <section className="welcome-section">
//       <div className="content-column">
//         <h1 style={{ fontFamily: 'Poppins', fontSize: '80px' }}>
//         FASHION AT YOUR FINGERTIPS
//         </h1>
//         <p style={{ fontFamily: 'Poppins', fontSize: '20px', fontWeight: 'bold' }}>Fashion Redefined</p>
//         <img
//           src={require('../../../../img/welcome.png')} 
//           alt="Welcome Image"
//           className="centered-image"
//         />
//        <p style={{ fontFamily: 'Poppins', fontSize: '18px'}}>WHEAR is the place where fashion meets innovation. Our Fashion Designer Boutique offers high-quality products and exceptional customer service both online and in our physical locations. We have a passion for revolutionizing fashion engagement by building a social network, optimizing the user experience, and developing AI technology for building personal wardrobes. We prioritize security and privacy, continuously update fashion data, improve outfit suggestions, and enhance search features. Join our community and share knowledge, tips, and inspiration with others who share your love for fashion.</p>
//        <Link to="/join-us" className="join-now-btn" style={{ fontFamily: 'Poppins', fontSize: '20px', fontWeight: 'bold' }}>Join Now</Link>
//       </div>
//       <div className="background-column">
//       </div>
//     </section>
//   );
// };

// export default WelcomeSection;

import IOSIMG from '../../../../img/ios.png'
import ANDROIDIMG from '../../../../img/android.png'


import React from 'react';
import './WelcomeSection.css';

const WelcomeSection: React.FC = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <div style={{marginLeft: '50px'}}>
          <div style={{ float: 'left', width: '13%', height: '100%', overflow: 'hidden', marginRight: '20px' }}>
            <img src={ANDROIDIMG} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ width: '13%', height: '100%', overflow: 'hidden' }}>
            <img src={IOSIMG} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WelcomeSection;
