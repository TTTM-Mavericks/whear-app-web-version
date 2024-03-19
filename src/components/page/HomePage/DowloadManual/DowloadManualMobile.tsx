import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './DowloadManualMobile.css';

const DownloadManualMobile: React.FC = () => {
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
                Download Manual Expo Go
            </Typography>
            <div className="service-columns-mobile">
                {currentSlide === 1 && (
                    <div className="service-column-mobile">
                        <div className="service-content-mobile">
                            <Typography variant="h5" className="service-title-mobile" sx={{ fontFamily: 'Poppins', fontSize: '24px', fontWeight: 'bold' }}>
                                Step 1
                            </Typography>
                            <Typography variant="body1" className="service-description-mobile">
                                Go to CH Play or App Store and find "Expo Go"
                            </Typography>
                        </div>
                        <img src={require('../../../../asserts/img/down.jpg')} alt="Service 1" className="service-image-mobile" />
                    </div>
                )}

                {currentSlide === 2 && (
                    <div className="service-column-mobile">
                        <div className="service-content-mobile">
                            <Typography variant="h5" className="service-title-mobile" sx={{ fontFamily: 'Poppins', fontSize: '24px', fontWeight: 'bold' }}>
                                Step 2
                            </Typography>
                            <Typography variant="body1" className="service-description-mobile">
                                After download the icon of Expo Go is like below:
                            </Typography>
                        </div>
                        <img src={require('../../../../asserts/img/down1.jpg')} alt="Service 2" className="service-image-mobile" />
                    </div>
                )}

                {currentSlide === 3 && (
                    <div className="service-column-mobile">
                        <div className="service-content-mobile">
                            <Typography variant="h5" className="service-title-mobile" sx={{ fontFamily: 'Poppins', fontSize: '24px', fontWeight: 'bold' }}>
                                Step 3
                            </Typography>
                            <Typography variant="body1" className="service-description-mobile">
                                The screen of Expo Go like below:
                            </Typography>
                        </div>
                        <img src={require('../../../../asserts/img/down2.jpg')} alt="Service 3" className="service-image-mobile" />
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

export default DownloadManualMobile;
