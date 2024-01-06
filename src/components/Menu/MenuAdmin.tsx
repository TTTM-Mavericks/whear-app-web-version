import * as React from 'react';
import './Menu.css';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { Drawer } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const MenuAdmin: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', backgroundColor: "#BAF667" }}>
            <Drawer variant="permanent" style={{ backgroundColor: "#BAF667" }}>
                {/* LIST MENU CHOICE */}
                <NavLink to="/admin-manager" style={{ textDecoration: "none", color: "white", width: "100%", marginLeft: "1rem" }}>
                    <List>
                        <ListItem disablePadding sx={{ display: 'block' }} className='list_menu_choice'>
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
                                    <MailIcon className='dashboardicon' />
                                </ListItemIcon>
                                <ListItemText primary="DashBoard" children />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </NavLink>
                <NavLink to="/user-app-installed" style={{ textDecoration: "none", color: "black", width: "80%", marginLeft: "1rem", marginTop: "-10px" }}>
                    <List>
                        <ListItem disablePadding sx={{ display: 'block' }} className='list_menu_choice'>
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
                                    <MailIcon className='dashboardicon' />
                                </ListItemIcon>
                                <ListItemText primary="User App Installed" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </NavLink>

                <NavLink to="/user-have-guardian" style={{ textDecoration: "none", color: "black", width: "80%", marginLeft: "1rem", marginTop: "-10px" }}>
                    <List>
                        <ListItem disablePadding sx={{ display: 'block' }} className='list_menu_choice'>
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
                                    <MailIcon className='dashboardicon' />
                                </ListItemIcon>
                                <ListItemText primary="User have guardian" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </NavLink>

                <NavLink to="/number-of-guardian" style={{ textDecoration: "none", color: "black", width: "80%", marginLeft: "1rem", marginTop: "-10px" }}>
                    <List>
                        <ListItem disablePadding sx={{ display: 'block' }} className='list_menu_choice'>
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
                                    <MailIcon className='dashboardicon' />
                                </ListItemIcon>
                                <ListItemText primary="number of guardian" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </NavLink>

                <NavLink to="/user-connect-safe" style={{ textDecoration: "none", color: "black", width: "80%", marginLeft: "1rem", marginTop: "-10px" }}>
                    <List>
                        <ListItem disablePadding sx={{ display: 'block' }} className='list_menu_choice'>
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
                                    <MailIcon className='dashboardicon' />
                                </ListItemIcon>
                                <ListItemText primary="user connect safe" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </NavLink>

                <NavLink to="/user-last-week-activity" style={{ textDecoration: "none", color: "black", width: "80%", marginLeft: "1rem", marginTop: "-10px" }}>
                    <List>
                        <ListItem disablePadding sx={{ display: 'block' }} className='list_menu_choice'>
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
                                    <MailIcon className='dashboardicon' />
                                </ListItemIcon>
                                <ListItemText primary="user last week activity" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </NavLink>

                <NavLink to="/send out alarm" style={{ textDecoration: "none", color: "black", width: "80%", marginLeft: "1rem", marginTop: "-10px" }}>
                    <List>
                        <ListItem disablePadding sx={{ display: 'block' }} className='list_menu_choice'>
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
                                    <MailIcon className='dashboardicon' />
                                </ListItemIcon>
                                <ListItemText primary="send out alarm" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </NavLink>

                <NavLink to="/received-alarm" style={{ textDecoration: "none", color: "black", width: "80%", marginLeft: "1rem", marginTop: "-10px" }}>
                    <List>
                        <ListItem disablePadding sx={{ display: 'block' }} className='list_menu_choice'>
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
                                    <MailIcon className='dashboardicon' />
                                </ListItemIcon>
                                <ListItemText primary="received alarm" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </NavLink>

                <NavLink to="/user-per-country" style={{ textDecoration: "none", color: "black", width: "80%", marginLeft: "1rem", marginTop: "-10px" }}>
                    <List>
                        <ListItem disablePadding sx={{ display: 'block' }} className='list_menu_choice'>
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
                                    <MailIcon className='dashboardicon' />
                                </ListItemIcon>
                                <ListItemText primary="user per country" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </NavLink>
                {/* END LIST MENU CHOICE */}
            </Drawer>
        </Box>
    );
}

export default MenuAdmin;
