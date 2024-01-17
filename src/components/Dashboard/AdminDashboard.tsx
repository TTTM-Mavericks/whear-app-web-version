import * as React from 'react';
import MenuAdmin from '../Menu/MenuAdmin';
import { Box } from "@mui/material";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Introduce from '../Introdution/Introduce';
import GuardianWisePieChart from '../GuardianWisePieChart/GuardianWisePieChart';
import TimeWiseUserAppInstalled from '../TimeWiseUsersInstalledApp/TimeWiseUsersInstalledApp';
import LatestRegistration from '../LatestRegistrations/LatestRegistrations';

const AdminDashboard: React.FC = () => {
    return (
        <Box>
            <Box style={{ display: 'flex', height: '100vh' }}>
                <Box style={{ flex: '1 1 20%' }}>
                    <Box>
                        <Header />
                        <MenuAdmin />
                    </Box>
                </Box>
                <Box style={{ flex: '1 1 80%', padding: '20px', borderLeft: '3px solid #FA9E93', marginTop: "5%" }}>
                    <Box>
                        <Box>
                            <Introduce />
                            <LatestRegistration />
                            <GuardianWisePieChart />
                            <TimeWiseUserAppInstalled />
                        </Box>
                        <Box>
                            <Footer />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default AdminDashboard;
