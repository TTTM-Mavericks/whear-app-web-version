import React, { useState, useEffect } from 'react';
import StoryPC from './StoryPC';
import StoryMobile from './StoryMobile';

const Story: React.FC = () => {
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
                <StoryMobile />
            ) : (
                <StoryPC />
            )}
        </div>
    );
};

export default Story;
