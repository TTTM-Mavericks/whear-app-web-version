import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './HeaderMobile.css';

const HeaderMobile: React.FC = () => {
  const location = useLocation();
  const currentTab = location.pathname;
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [boxWidth, setBoxWidth] = useState(`${window.innerWidth / 2}px`);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    const updateDimensions = () => {
      setBoxWidth(`${window.innerWidth / 2}px`);
    };

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div className="navbar justify-between items-center text-white w-full md:w-[80%] relative z-50 bg-black bg-opacity-50">
      <div className="md:hidden">
        <Link to="/">
          <img src={require('../../../img/logo_web.png')} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="md:hidden items-center">
        <Button
          variant="outlined"
          onClick={handleDrawerOpen}
          aria-label="menu"
          sx={{
            color: '#baf667',
            border: '2px solid #baf667',
            minWidth: '10px',
            padding: '10px',
          }}
        >
          <MenuIcon />
        </Button>
      </div>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        className="custom-drawer-paper"
      >
        <Box sx={{ width: boxWidth }}>
          <List>
            <ListItem button component={Link} to="/" selected={currentTab === "/"}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about" selected={currentTab === "/about"}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/portfolio" selected={currentTab === "/portfolio"}>
              <ListItemText primary="Portfolio" />
            </ListItem>
            <ListItem button component={Link} to="/contact" selected={currentTab === "/contact"}>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button component={Link} to="/join-us" selected={currentTab === "/join-us"}>
              <ListItemText primary="Join Us" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
          </div>
  );
};

export default HeaderMobile;
