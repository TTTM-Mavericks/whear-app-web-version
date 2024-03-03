import * as React from 'react';
import MenuAdmin from '../Menu/MenuAdmin';
import { Box } from "@mui/material";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Introduce from '../Introdution/Introduce';
import GuardianWisePieChart from '../GuardianWisePieChart/GuardianWisePieChart';
import TimeWiseUserAppInstalled from '../TimeWiseUsersInstalledApp/TimeWiseUsersInstalledApp';
import LatestRegistration from '../LatestRegistrations/LatestRegistrations';
import UsersPerCountry from '../UsersPerCountry/UsersPerCountry';
import LineChart from '../LatestRegistrations/TesstChart';
import PieChart from '../GuardianWisePieChart/TesstPieChart';
import BarChart from '../TimeWiseUsersInstalledApp/TestingBarChart';

const AdminDashboard: React.FC = () => {
    return (
        <Box>
            <Header />
            <Box style={{ display: 'flex' }}>
                <Box style={{ flex: '20%' }}>
                    <Box>
                        <MenuAdmin />
                    </Box>
                </Box>
                <Box style={{ flex: '80%', padding: '20px', borderLeft: '3px solid #FA9E93', marginTop: "5%" }}>
                    <Box>
                        <Box>
                            <Box >
                                <Introduce />
                                <Box style={{ borderBottom: '2px solid #FA9E93', marginTop: "20px", marginBottom: "20px" }}></Box>
                            </Box>
                            <Box>
                                {/* <LatestRegistration /> */}
                                <LineChart />
                                <Box style={{ borderBottom: '2px solid #FA9E93', marginTop: "20px", marginBottom: "20px" }}></Box>
                            </Box>
                            <Box>
                                {/* <GuardianWisePieChart /> */}
                                <PieChart />
                                <Box style={{ borderBottom: '2px solid #FA9E93', marginTop: "20px", marginBottom: "20px" }}></Box>
                            </Box>
                            <Box>
                                <TimeWiseUserAppInstalled />
                                {/* <BarChart /> */}
                                <Box style={{ borderBottom: '2px solid #FA9E93', marginTop: "20px", marginBottom: "20px" }}></Box>
                            </Box>
                            <Box>
                                <UsersPerCountry />
                                <Box style={{ borderBottom: '2px solid #FA9E93', marginTop: "20px", marginBottom: "20px" }}></Box>
                            </Box>
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
