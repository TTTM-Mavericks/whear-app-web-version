import * as React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer: React.FC = () => {
    return (
        <div className='footer-component'>
            <p style={{ marginLeft: "10px", marginRight: "10px" }}>Copyright @ 2023 Safelet. All rights reserved.</p>
            <Link to={"/terms-of-use"} style={{ marginLeft: "100px", marginTop: "15px" }}>Terms of Use</Link>
            <p style={{ marginLeft: "10px", marginRight: "10px" }}>|</p>
            <Link to={"/privacy-policy"} style={{ marginRight: "400px", marginTop: "15px" }}>Privacy Policy</Link>
            <p>Hand Crafted & made with Love</p>
        </div>
    );
}

export default Footer;
