import React, { useState, useEffect } from 'react';
import WelcomeSectionPC from './WelcomeSectionPC';
import WelcomeSectionMobile from './WelcomeSectionMobile';

const WelcomeSection: React.FC = () => {
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
                <WelcomeSectionMobile />
            ) : (
                <WelcomeSectionPC />
            )}
        </div>
    );
};

export default WelcomeSection;
