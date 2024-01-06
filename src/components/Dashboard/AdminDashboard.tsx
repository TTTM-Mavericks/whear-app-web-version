import * as React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MenuAdmin from '../Menu/MenuAdmin';
import Introduce from '../Introdution/Introduce';
import { Box, Card, Grid } from "@mui/material";

const AdminDashboard: React.FC = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <MenuAdmin />
            {/* <Introduce /> */}
        </Box>
    );
}

export default AdminDashboard;
