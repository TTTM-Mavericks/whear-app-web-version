import React from 'react';
import './UserManualPC.css';

const UserManualPC: React.FC = () => {
    return (
        <section className="service-section">
            <h1 style={{ fontFamily: 'Poppins', fontSize: '56px' }}>
                User Manual Whear App
            </h1>
            <div className="service-columns">
                <div className="service-column" style={{ fontFamily: "" }}>
                    <p className="service-content" style={{ fontFamily: 'Poppins', fontSize: '36px', fontWeight: 'bold', marginBottom: '5px' }}>Step 1</p>
                    <p className="service-content2" style={{ fontFamily: 'Poppins', fontSize: '20px', marginTop: '5px' }}> Download Expo go in chplay or appstore and Scan qr code with suitable operating system</p>
                    <img src={require('../../../../asserts/img/app.png')} alt="Service 1" className="service-image" />
                </div>
                <div className="service-column">
                    <p className="service-content" style={{ fontFamily: 'Poppins', fontSize: '36px', fontWeight: 'bold', marginBottom: '5px' }}>Step 2</p>
                    <p className="service-content2" style={{ fontFamily: 'Poppins', fontSize: '20px', marginTop: '5px' }}>If you want to take the URL manually then click to “ENTER URL manually” </p>
                    <img src={require('../../../../asserts/img/app01.png')} alt="Service 2" className="service-image" />
                </div>
                <div className="service-column">
                    <img src={require('../../../../asserts/img/app2.png')} alt="Service 3" className="service-image" />
                    <p className="service-content" style={{ fontFamily: 'Poppins', fontSize: '36px', fontWeight: 'bold', marginBottom: '5px' }}>Step 3</p>
                    <p className="service-content2" style={{ fontFamily: 'Poppins', fontSize: '20px', marginTop: '5px' }}><p style={{ marginBottom: "-2px" }}>Android:</p> exp://u.expo.dev/update/5cd03ac1-a216-4ff6-88f5-c8a4653ea17e</p>
                    <p className="service-content2" style={{ fontFamily: 'Poppins', fontSize: '20px', marginTop: '5px' }}><p style={{ marginBottom: "-2px" }}>IOS:</p> exp://u.expo.dev/update/abbb9910-3295-43be-a544-245689d85d1e</p>
                </div>
            </div>
        </section>
    );
};

export default UserManualPC;
