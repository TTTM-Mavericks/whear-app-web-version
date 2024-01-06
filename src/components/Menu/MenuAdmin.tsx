import * as React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

const MenuAdmin: React.FC = () => {
    return (
        <Drawer variant="permanent">
            {/* LIST MENU CHOICE */}
            <NavLink to="/admin-manager" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem" }}>
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
            <NavLink to="/user-app-installed" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem", marginTop: "-10px" }}>
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

            <NavLink to="/user-have-guardian" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem", marginTop: "-10px" }}>
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

            <NavLink to="/number-of-guardian" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem", marginTop: "-10px" }}>
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
                            <ListItemText primary="Number Guardian" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>

            <NavLink to="/user-connect-safe" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem", marginTop: "-10px" }}>
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
                            <ListItemText primary="User Connect Safe" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>

            <NavLink to="/user-last-week-activity" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem", marginTop: "-10px" }}>
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
                            <ListItemText primary="User Last Activity" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>

            <NavLink to="/send-out-alarm" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem", marginTop: "-10px" }}>
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
                            <ListItemText primary="Send Out Alarm" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>

            <NavLink to="/received-alarm" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem", marginTop: "-10px" }}>
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
                            <ListItemText primary="Received Alarm" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>

            <NavLink to="/user-per-country" style={{ textDecoration: "none", color: "black", width: "90%", marginLeft: "1rem", marginTop: "-10px" }}>
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
                            <ListItemText primary="User Per Country" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>
            {/* END LIST MENU CHOICE */}
        </Drawer>
    );
}

export default MenuAdmin;
