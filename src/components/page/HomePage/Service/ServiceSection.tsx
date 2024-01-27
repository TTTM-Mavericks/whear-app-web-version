import React, { useState, useEffect } from 'react';
import ServiceSectionPC from './ServiceSectionPC';
import ServiceSectionMobile from './ServiceSectionMobile';

const ServiceSection: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    const handleWindowSizeChange = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    console.log('Is Mobile:', isMobile);

    return (
        <div>
            {isMobile ? (
                <ServiceSectionMobile />
            ) : (
                <ServiceSectionPC />
            )}
        </div>
    );
};

export default ServiceSection;
