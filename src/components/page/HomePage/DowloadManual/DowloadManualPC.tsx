import React from 'react';
import './DowloadManualPC.css';

const DownloadManualPC: React.FC = () => {
    return (
        <section className="service-section">
            <h1 style={{ fontFamily: 'Poppins', fontSize: '56px' }}>
                Download Manual Expo Go
            </h1>
            <div className="service-columns">
                <div className="service-column" style={{ fontFamily: "" }}>
                    <p className="service-content" style={{ fontFamily: 'Poppins', fontSize: '36px', fontWeight: 'bold', marginBottom: '5px' }}>Step 1</p>
                    <p className="service-content2" style={{ fontFamily: 'Poppins', fontSize: '20px', marginTop: '5px' }}> Go to CH Play or App Store and find "Expo Go"</p>
                    <img src={require('../../../../asserts/img/down.jpg')} alt="Service 1" className="service-image" />
                </div>
                <div className="service-column">
                    <p className="service-content" style={{ fontFamily: 'Poppins', fontSize: '36px', fontWeight: 'bold', marginBottom: '5px' }}>Step 2</p>
                    <p className="service-content2" style={{ fontFamily: 'Poppins', fontSize: '20px', marginTop: '5px' }}>After download the icon of Expo Go is like below:</p>
                    <img src={require('../../../../asserts/img/down1.jpg')} alt="Service 2" className="service-image" />
                </div>
                <div className="service-column">
                    <img src={require('../../../../asserts/img/down2.jpg')} alt="Service 3" className="service-image" />
                    <p className="service-content" style={{ fontFamily: 'Poppins', fontSize: '36px', fontWeight: 'bold', marginBottom: '5px' }}>Step 3</p>
                    <p className="service-content2" style={{ fontFamily: 'Poppins', fontSize: '20px', marginTop: '5px' }}> After download the icon of Expo Go is like above</p>
                </div>
            </div>
        </section>
    );
};

export default DownloadManualPC;
