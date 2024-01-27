import React, { useState, useEffect } from 'react';
import AppSectionPC from './AppSectionPC';
import AppSectionMobile from './AppSectionMobile';

const AppSection: React.FC = () => {
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
                <AppSectionMobile />
            ) : (
                <AppSectionPC />
            )}
        </div>
    );
};

export default AppSection;
