import React from 'react';
import './AppSectionPC.css';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/CloudDownload';

// const userManual = 'https://whearapp.tech/user_manual.docx'
const userManual = 'http://localhost:3000/user_manual.docx'

const AppSectionPC: React.FC = () => {
  return (
    <section className="app-section">
      <div className="left-column">
        <img src={require('../../../../img/Introduce.jpg')} alt="Left Image" className="app-image" />
      </div>
      <div className="center-column">
        {/* <img src={require('../../../../asserts/img/appmanual.png')} alt="Left Image" className="app-manual" />
        <img src={require('../../../../asserts/img/app1.png')} alt="Left Image" className="app-manual" />
        <img src={require('../../../../asserts/img/app2.png')} alt="Left Image" className="app-manual" />
        <div style={{ marginTop: "-100%", marginLeft: "65%" }}>
          <p style={{ fontFamily: "Aptos" }}><p style={{ fontWeight: "bolder", fontFamily: "Aptos" }}>Android:</p> <p style={{ marginLeft: "5%", marginTop: "-5%", fontFamily: "Aptos" }}>exp://u.expo.dev/update/314f524e-6d74-4e0c-a442-08c1151c28c3</p></p>
          <p style={{ fontFamily: "Aptos" }}><p style={{ fontWeight: "bolder", fontFamily: "Aptos" }}>IOS:</p> <p style={{ marginLeft: "5%", marginTop: "-5%", fontFamily: "Aptos" }}>exp://u.expo.dev/update/cef5a500-e042-445f-b192-d4a8ff66ee8c</p></p>
        </ div> */}
        <h1>WHEAR APP</h1>
        <p>Discover the latest trends and elevate your style with WHEAR. Our fashion-forward boutique offers a curated collection of designer pieces that will make you stand out from the crowd. From elegant dresses to chic accessories, we have everything you need to create your perfect look. Do not miss out on this exclusive discount - shop now and save on your favorite pieces. Download THE WHEAR APP today and let our personal stylists guide you to effortless style, everyday.</p>
        <Button
          variant="contained"
          color="primary"
          href={userManual}
          download
          endIcon={<DownloadIcon />}
          style={{ backgroundColor: 'black', color: 'white' }}
        >
          Download User Manual
        </Button>
      </div>
      <div className="right-column">
        <img src={require('../../../../img/Frame.jpg')} alt="Right Image" className="app-image" />
      </div>
    </section>
  );
};

export default AppSectionPC;
