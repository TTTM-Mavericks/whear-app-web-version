import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"
import ICON from '../../asserts/img/5f0e416e-0323-41d0-8a62-e5e70cc378f3.jpg'
import LOGO from '../../asserts/img/d7d3518a-cbf8-4519-940c-4948a28ed865.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Autocomplete, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from '@mui/material';
const Header: React.FC = () => {

    const [data, setData] = React.useState([]);
    // const fillData = (dataFilter) => {
    //     if (dataFilter) {
    //         setData([dataFilter]);
    //     } else {
    //         setData('');
    //     }
    // }
    return (
        <div className='header-component' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* <img src={ICON} alt="Icon" style={{ width: "5%", marginLeft: "5%" }}></img> */}

            <Link to={'/'} style={{ marginLeft: "7%" }}>
                <img src={LOGO} alt="Logo" style={{ width: "70%", marginLeft: "5%" }}></img></Link>
            <div>
                <Autocomplete
                    className='select-country'
                    // onChange={(e, v) => { e.target.value }}
                    disablePortal
                    options={data}
                    sx={{ width: 200 }}
                    // getOptionLabel={(data) => data.name || ""}
                    renderInput={(params) => <TextField {...params} label="Finding" />}
                />
            </div>
            <NavLink to="/edit-profile" style={{ textDecoration: "none", color: "black", width: "9%", marginLeft: "1rem", marginTop: "-10px" }}>
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }} className='header-choice'>
                        <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
                            <ListItemText primary="Safelet" />
                            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                                <AccountCircleIcon className='header-icon-account' />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>
        </div>
    );
}

export default Header;
