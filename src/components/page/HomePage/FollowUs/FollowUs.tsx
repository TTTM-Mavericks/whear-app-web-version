import React, { useState, useEffect } from 'react';
import FollowUsPC from './FollowUsPC';
import FollowUsMobile from './FollowUsMobile';

const FollowUs: React.FC = () => {
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
                <FollowUsMobile />
            ) : (
                <FollowUsPC />
            )}
        </div>
    );
};

export default FollowUs;
