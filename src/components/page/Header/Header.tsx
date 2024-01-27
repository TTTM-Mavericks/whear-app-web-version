import React, { useState, useEffect } from 'react';
import HeaderPC from './HeaderPC';
import HeaderMobile from './HeaderMobile';

const Header: React.FC = () => {
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
                <HeaderMobile />
            ) : (
                <HeaderPC />
            )}
        </div>
    );
};

export default Header;
