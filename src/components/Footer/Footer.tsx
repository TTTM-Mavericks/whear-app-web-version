import * as React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer: React.FC = () => {
    return (
        <div className='footer-component'>
            <p style={{ marginLeft: "10px" }}>Copyright @ 2023 Safelet. All right reserved!</p>
            <Link to={"/portfolio"} style={{ marginLeft: "150px", marginTop: "15px", color: "white" }}>Terms of Use</Link>
            <p style={{ marginLeft: "20px", marginRight: "20px" }}>|</p>
            <Link to={"/contact"} style={{ marginTop: "15px", color: "white" }}>Privacy Policy</Link>
            <p style={{ marginLeft: "15%" }}>Hand Crafted & made with Love</p>
        </div>
    );
}

export default Footer;