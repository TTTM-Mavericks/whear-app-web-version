// Footer.tsx
import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container className="container">
        <Grid container spacing={0}>
          <Grid item xs={12} md={8}>
            <img
              src={require('../../../img/logo_web.png')}
              alt="Logo"
              className="footer-logo"
            />
          </Grid>
          <Grid item xs={12} md={4} className="contact-info">
            <Typography variant="body1">
              <Link
                href="https://www.facebook.com/WHEAR.Germecorp"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <FacebookIcon fontSize="large" /> facebook.com/WHEAR.Germecorp
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href="https://www.instagram.com/whear.e2?fbclid=IwAR0m1PGxqcGbmsrWVz4J2_HyUlnLDyeRDnf5CttNtInzZbPQKzAUsePf9EA"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <InstagramIcon fontSize="large" /> whear.e2
              </Link>
            </Typography>
            <Typography variant="body1">
              <PhoneIcon fontSize="large" /> 091 197 13 02
            </Typography>
            <Typography variant="body1">
              <MailOutlineIcon fontSize="large" /> germe.lavogueicon.ai@gmail.com
            </Typography>
            
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
