import * as React from 'react';
import MenuAdmin from '../Menu/MenuAdmin';
import { Box } from "@mui/material";
import UserAppInstalled from '../UserAppInstalled/UserAppInstalled';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NumberOfGuardian from '../NumberOfGuardian/NumberOfGuardian';

const NumberOfGuardianDashboard: React.FC = () => {
    return (
        <Box>
            <Header />
            <Box style={{ display: 'flex', height: '100vh' }}>
                <Box style={{ flex: '1 1 20%' }}>
                    <Box>
                        <MenuAdmin />
                    </Box>
                </Box>
                <Box style={{ flex: '1 1 80%', padding: '20px', borderLeft: '3px solid #FA9E93', marginTop: "5%" }}>
                    <Box>
                        <NumberOfGuardian />
                        <Box style={{ marginBottom: 'auto' }}>
                            <Footer />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default NumberOfGuardianDashboard;
