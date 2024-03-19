import React, { useState, useEffect } from 'react';
import UserManualPC from './UserManualPC';
import UserManualMobile from './UserManualMobile';

const UserManual: React.FC = () => {
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
                <UserManualMobile />
            ) : (
                <UserManualPC />
            )}
        </div>
    );
};

export default UserManual;
