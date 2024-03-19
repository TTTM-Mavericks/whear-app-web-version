import React, { useState, useEffect } from 'react';
import DowloadManualPC from './DowloadManualPC';
import DowloadManualMobile from './DowloadManualMobile';

const DowloadManual: React.FC = () => {
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
                <DowloadManualMobile />
            ) : (
                <DowloadManualPC />
            )}
        </div>
    );
};

export default DowloadManual;
