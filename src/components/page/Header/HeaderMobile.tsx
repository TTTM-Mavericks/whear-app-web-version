import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import './HeaderMobile.css'
const HeaderMobile: React.FC = () => {
  const location = useLocation();
  const currentTab = location.pathname;
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="navbar justify-between items-center text-white h-16 w-full md:w-[80%] relative z-50 bg-black bg-opacity-50">
      <div className="md:hidden">
        <Link to="/">
          <img src={require('../../../img/logo_web.png')} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="md:hidden items-center">
        <button className="text-white text-3xl" onClick={handleDrawerOpen}>
          &#9776;
        </button>
      </div>

      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
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
      </Drawer>
    </div>
  );
};

export default HeaderMobile;
