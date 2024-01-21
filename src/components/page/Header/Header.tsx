import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const currentTab = location.pathname;

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="logo-container">
          <Link to="/">
            <img src={require('../../../img/logo_web.png')} alt="Logo" className="logo" />
          </Link>
        </div>
        <ul className="menu">
          <li className={currentTab === "/" ? "active-tab" : ""}><Link to="/">Home</Link></li>
          <li className={currentTab === "/about" ? "active-tab" : ""}><Link to="/about">About</Link></li>
          <li className={currentTab === "/portfolio" ? "active-tab" : ""}><Link to="/portfolio">Portfolio</Link></li>
          <li className={currentTab === "/contact" ? "active-tab" : ""}><Link to="/contact">Contact</Link></li>
          <li><Link to="/join-us" className="join-us-btn">Join Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
