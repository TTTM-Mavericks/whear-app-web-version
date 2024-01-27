// AppSectionMobile.tsx
import React from 'react';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/CloudDownload';
import './AppSectionMobile.css';

const AppSectionMobile: React.FC = () => {
  return (
    <section className="app-section-mobile">
      <div className="app-image-container">
        <img src={require('../../../../img/Introduce.jpg')} alt="App Image" className="app-image" />
      </div>
      <div className="center-column-mobile">
        <h1>WHEAR APP</h1>
        <p>Discover the latest trends and elevate your style with WHEAR. Our fashion-forward boutique offers a curated collection of designer pieces that will make you stand out from the crowd. From elegant dresses to chic accessories, we have everything you need to create your perfect look. Do not miss out on this exclusive discount - shop now and save on your favorite pieces. Download THE WHEAR APP today and let our personal stylists guide you to effortless style, everyday.</p>
        <Button
          variant="contained"
          color="primary"
          href="/download-link"
          endIcon={<DownloadIcon />}
          style={{ backgroundColor: 'black', color: 'white', marginTop: '20px' }}
        >
          Download Now
        </Button>
      </div>
      <div className="app-image-container">
        <img src={require('../../../../img/Frame.jpg')} alt="App Image" className="app-image" />
      </div>
    </section>
  );
};

export default AppSectionMobile;
