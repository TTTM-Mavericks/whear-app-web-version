import * as React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import PostAddIcon from '@mui/icons-material/PostAdd';
import NewsIcon from '@mui/icons-material/Newspaper';
import ClothesIcon from '@mui/icons-material/CalendarMonthRounded';
import BrandIcon from '@mui/icons-material/BrandingWatermark';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Box } from '@mui/system';

const menuItems = [
    { to: "/admin-manager", text: "Dashboard", icon: <DashboardIcon /> },
    // { to: "/admin-manage-events", text: "Manage Events", icon: <EventIcon /> },
    { to: "/admin-manage-users", text: "Manage Users", icon: <PeopleIcon /> },
    { to: "/admin-manage-posting", text: "Manage Posts", icon: <PostAddIcon /> },
    // { to: "/admin-manage-news", text: "Manage News", icon: <NewsIcon /> },
    { to: "/admin-manage-clothes", text: "Manage Clothes", icon: <ClothesIcon /> },
    // { to: "/admin-manage-brand", text: "Manage Brand", icon: <BrandIcon /> },
    // { to: "/admin-manage-invoice", text: "Manage Invoice", icon: <ReceiptIcon /> },
    // { to: "/admin-manage-income", text: "Manage Income", icon: <MonetizationOnIcon /> },
    // { to: "/admin-manage-collection", text: "Manage Collection", icon: <DashboardIcon /> },
    // { to: "/user-app-installed", text: "User App Installed", icon: <EventIcon /> },
    // { to: "/user-have-guardian", text: "Haved Guardian", icon: <PeopleIcon /> },
    // { to: "/number-of-guardian", text: "Number Guardian", icon: <PostAddIcon /> },
    // { to: "/user-connect-safe", text: "User Connect Safe", icon: <NewsIcon /> },
    // { to: "/user-last-week-activity", text: "User Last Activity", icon: <ClothesIcon /> },
    // { to: "/send-out-alarm", text: "Send Out Alarm", icon: <BrandIcon /> },
    // { to: "/received-alarm", text: "Received Alarm", icon: <ReceiptIcon /> },
    // { to: "/user-per-country", text: "User Per Country", icon: <MonetizationOnIcon /> },
];

const MenuAdmin: React.FC = () => {
    return (
        <Box className='itmebebe'>
            {/* LIST MENU CHOICE */}
            {menuItems.map((item, index) => (
                <NavLink key={index} to={item.to} style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem" }}>
                    <List>
                        <ListItem disablePadding sx={{ display: 'block', width: "90%", marginLeft: "5%", marginBottom: "-12%" }} className='list_menu_choice'>
                            <ListItemButton
                                sx={{
                                    minHeight: 40,
                                    px: 2,
                                }}
                                className='menuicon'
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} style={{ marginLeft: "10px" }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </NavLink>
            ))}
        </Box>
    )
};

export default MenuAdmin;
