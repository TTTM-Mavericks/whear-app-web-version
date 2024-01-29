import React, { useState } from 'react';
import { Typography, Grid, Link, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './FollowUsMobile.css';

const FollowUsSectionMobile: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/420152069_122113313036174946_7882537097310107492_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEiWFGyO-7qqt0Raj9sscta0PZp9dHUJq_Q9mn10dQmr2zIyAZCZHwwrqrSO9FYCSXNn2MfoUuYL_0eSWD7hSfp&_nc_ohc=dxpaOTEgpuwAX_eUeKA&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBbIRfqx0y_MTyxol-eLjkKf877-NpWDVB9Mle46j3dpQ&oe=65B23BA1",
    "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/420147492_122113312910174946_7388920838750777299_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGySBWawa6ViT__qvxYhfaGnO6d-iIYDEqc7p36IhgMSt5I2YBzQoB241J_Pn75zE6IGaApytKxPNHrGkEa9m5u&_nc_ohc=D_TmSZwwxYwAX8sibqQ&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDoFHvC5o6bObdcnyKyLVjH-ps7CPU9smIumLh59oCrYQ&oe=65B25B8F",
    "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/422870989_122116367006174946_3972356402791082584_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeF4mQwpQxFgpWZFiCW8uOLyxXIHErzBqU7FcgcSvMGpTuPrSy5E1G8x5PJxwl2jaB5oZn60i6rkKGr9xPgETN4P&_nc_ohc=R2559Toz7QUAX9Q47Ja&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCBg3b2r6HsXVWNYNrGOXBcQVgImqnmx781a_3TZoP44A&oe=65BC216E",
    "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/421055750_122115494882174946_4388316753346599757_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFLgbED4Zg87z1XkcUvCEvseIrPygy97994is_KDL3v3x2IV8nfyqW5p5y2wPdqAeycj-LtAaMEhw7Uq58ytaS6&_nc_ohc=2vOIBZjTCqcAX9BQOXT&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCGHCxr21PExhlmwLj185xxR81lF3ROOmWqDxMNd9tElQ&oe=65BAFDA9",
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <section className="follow-us-section-mobile">
      <Typography variant="h1" sx={{ fontFamily: 'Poppins', fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>
        FOLLOW US
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {images.map((image, index) => (
          <Grid item key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
            <Link href="https://www.instagram.com/whear.e2?igsh=MXJybXB2Y2JmNDNwdA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <img src={image} alt={`Image ${index + 1}`} className="follow-us-image-mobile" />
            </Link>
          </Grid>
        ))}
      </Grid>

      <Button
        size="small"
        className="arrow-button2 back-button2"
        onClick={handlePrevSlide}
        style={{ color: 'black', position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
      >
        <ArrowBackIcon />
      </Button>

      <Button
        size="small"
        className="arrow-button2 next-button2"
        onClick={handleNextSlide}
        style={{ color: 'black', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
      >
        <ArrowForwardIcon />
      </Button>
    </section>
  );
};

export default FollowUsSectionMobile;
