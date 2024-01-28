import React, { useState, useEffect } from 'react';
import PortfolioPC from './PortfolioPC';
import PortfolioMobile from './PortfolioMobile';

const Portfolio: React.FC = () => {
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
                <PortfolioMobile />
            ) : (
                <PortfolioPC />
            )}
        </div>
    );
};

export default Portfolio;
