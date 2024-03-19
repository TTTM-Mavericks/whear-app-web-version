import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './UserManualMobile.css';

const UserManualMobile: React.FC = () => {
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
                User Manual Whear App
            </Typography>
            <div className="service-columns-mobile">
                {currentSlide === 1 && (
                    <div className="service-column-mobile">
                        <div className="service-content-mobile">
                            <Typography variant="h5" className="service-title-mobile" sx={{ fontFamily: 'Poppins', fontSize: '24px', fontWeight: 'bold' }}>
                                Step 1
                            </Typography>
                            <Typography variant="body1" className="service-description-mobile">
                                Download Expo go in chplay or appstore and Scan qr code with suitable operating system
                            </Typography>
                        </div>
                        <img src={require('../../../../asserts/img/app1.png')} alt="Service 1" className="service-image-mobile" />
                    </div>
                )}

                {currentSlide === 2 && (
                    <div className="service-column-mobile">
                        <div className="service-content-mobile">
                            <Typography variant="h5" className="service-title-mobile" sx={{ fontFamily: 'Poppins', fontSize: '24px', fontWeight: 'bold' }}>
                                Step 2
                            </Typography>
                            <Typography variant="body1" className="service-description-mobile">
                                If you want to take the URL manually then click to “ENTER URL manually”
                            </Typography>
                        </div>
                        <img src={require('../../../../asserts/img/app01.png')} alt="Service 2" className="service-image-mobile" />
                    </div>
                )}

                {currentSlide === 3 && (
                    <div className="service-column-mobile">
                        <div className="service-content-mobile">
                            <Typography variant="h5" className="service-title-mobile" sx={{ fontFamily: 'Poppins', fontSize: '24px', fontWeight: 'bold' }}>
                                Step 3
                            </Typography>
                            <Typography variant="body1" className="service-description-mobile">
                                Android: exp://u.expo.dev/update/5cd03ac1-a216-4ff6-88f5-c8a4653ea17e
                            </Typography>
                            <Typography variant="body1" className="service-description-mobile">
                                IOS: exp://u.expo.dev/update/abbb9910-3295-43be-a544-245689d85d1e
                            </Typography>
                        </div>
                        <img src={require('../../../../asserts/img/app2.png')} alt="Service 3" className="service-image-mobile" />
                    </div>
                )}
            </div>

            <Button
                size="small"
                className="arrow-button2 back-button2"
                onClick={handlePrevSlide}
                style={{ color: 'black', position: 'absolute', left: 0, top: '50%' }}
            >
                <ArrowBackIcon />
            </Button>

            <Button
                size="small"
                className="arrow-button2 next-button2"
                onClick={handleNextSlide}
                style={{ color: 'black', position: 'absolute', right: 0, top: '50%' }}
            >
                <ArrowForwardIcon />
            </Button>
        </section>
    );
};

export default UserManualMobile;
