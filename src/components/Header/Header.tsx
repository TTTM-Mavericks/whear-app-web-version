import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header-nav">
      <div className="logo-container">
          <Link to="/">
            <img src={require('../../img/logo_web.png')} alt="Logo" className="logo" />
          </Link>
        </div>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/join-us" className="join-us-btn">Join Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
