import * as React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import { Card, Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PublicIcon from '@mui/icons-material/Public';
import ScoreIcon from '@mui/icons-material/Score';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/system';

const MenuAdmin: React.FC = () => {
    return (
        <Box className='itmebebe'>
            {/* LIST MENU CHOICE */}
            <NavLink to="/admin-manager" style={{ textDecoration: "none", color: "black", width: "80%", marginLeft: "1rem" }}>
                <List>
                    <ListItem disablePadding sx={{ display: 'block', marginBottom: "-12%", width: "90%", marginLeft: "5%" }} className='list_menu_choice'>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                            }}
                            className='menuicon'
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <DashboardIcon className='dashboardicon' />
                            </ListItemIcon>
                            <ListItemText primary="DashBoard" children style={{ marginLeft: "20px" }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>
            <NavLink to="/user-app-installed" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "2px" }}>
                <List>
                    <ListItem disablePadding sx={{ display: 'block', marginBottom: "-12%", width: "90%", marginLeft: "5%" }} className='list_menu_choice'>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                            }}
                            className='menuicon'
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <SystemUpdateAltIcon className='dashboardicon' />
                            </ListItemIcon>
                            <ListItemText primary="User App Installed" style={{ marginLeft: "20px" }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>

            <NavLink to="/user-have-guardian" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem" }}>
                <List>
                    <ListItem disablePadding sx={{ display: 'block', marginBottom: "-12%", width: "90%", marginLeft: "5%" }} className='list_menu_choice'>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                            }}
                            className='menuicon'
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <VerifiedUserIcon className='dashboardicon' />
                            </ListItemIcon>
                            <ListItemText primary="User Have Guardian" style={{ marginLeft: "20px" }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>

            <NavLink to="/number-of-guardian" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem" }}>
                <List>
                    <ListItem disablePadding sx={{ display: 'block', marginBottom: "-12%", width: "90%", marginLeft: "5%" }} className='list_menu_choice'>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                            }}
                            className='menuicon'
                        >

                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <PersonIcon className='dashboardicon' />
                            </ListItemIcon>
                            <ListItemText primary="Number Guardian" style={{ marginLeft: "20px" }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>

            <NavLink to="/user-connect-safe" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem" }}>
                <List>
                    <ListItem disablePadding sx={{ display: 'block', marginBottom: "-12%", width: "90%", marginLeft: "5%" }} className='list_menu_choice'>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                            }}
                            className='menuicon'
                        >

                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <PersonIcon className='dashboardicon' />
                            </ListItemIcon>
                            <ListItemText primary="User Connect Safe" style={{ marginLeft: "20px" }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>

            <NavLink to="/user-last-week-activity" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem" }}>
                <List>
                    <ListItem disablePadding sx={{ display: 'block', marginBottom: "-12%", width: "90%", marginLeft: "5%" }} className='list_menu_choice'>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                            }}
                            className='menuicon'
                        >

                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <ScoreIcon className='dashboardicon' />
                            </ListItemIcon>
                            <ListItemText primary="User Last Activity" style={{ marginLeft: "20px" }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>

            <NavLink to="/send-out-alarm" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem" }}>
                <List>
                    <ListItem disablePadding sx={{ display: 'block', marginBottom: "-12%", width: "90%", marginLeft: "5%" }} className='list_menu_choice'>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                            }}
                            className='menuicon'
                        >

                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <NotificationsIcon className='dashboardicon' />
                            </ListItemIcon>
                            <ListItemText primary="Send Out Alarm" style={{ marginLeft: "20px" }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>

            <NavLink to="/received-alarm" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem" }}>
                <List>
                    <ListItem disablePadding sx={{ display: 'block', marginBottom: "-12%", width: "90%", marginLeft: "5%" }} className='list_menu_choice'>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                            }}
                            className='menuicon'
                        >

                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <NotificationsActiveIcon className='dashboardicon' />
                            </ListItemIcon>
                            <ListItemText primary="Received Alarm" style={{ marginLeft: "20px" }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>

            <NavLink to="/user-per-country" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem" }}>
                <List>
                    <ListItem disablePadding sx={{ display: 'block', width: "90%", marginLeft: "5%" }} className='list_menu_choice'>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                            }}
                            className='menuicon'
                        >

                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <PublicIcon className='dashboardicon' />
                            </ListItemIcon>
                            <ListItemText primary="User Per Country" style={{ marginLeft: "20px" }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>
            {/* END LIST MENU CHOICE */}
        </Box >
    )
};
export default MenuAdmin;
