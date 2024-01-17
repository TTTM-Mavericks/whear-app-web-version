import React, { useState } from 'react';
import { Grid, Typography, Modal, Box } from '@mui/material';
import './Portfolio.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface PortfolioItem {
  imageSrc: string;
  title: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const handleImageClick = (item: PortfolioItem) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setOpenModal(false);
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const portfolioItems: PortfolioItem[] = [
    {
      imageSrc: require('../../../img/portfolio1.png'),
      title: 'Enhanced User Experience for Sewing Tools',
      description: 'WHEAR improved the user experience for their sewing tools by optimizing the interface, enhancing search features, and regularly updating fashion data.',
    },
    {
      imageSrc: require('../../../img/portfolio2.png'),
      title: 'Optimized Shopping Platform for Male Fashion Designer',
      description: 'A portfolio project showcasing the development of a fashion application platform for male fashion designers, focusing on optimizing the shopping experience and connecting users with the fashion world.',
    },
    {
      imageSrc: require('../../../img/portfolio3.png'),
      title: 'Creative Community Building: Man Designing Coat',
      description: "A portfolio project showcasing WHEAR's innovative fashion application platform, focusing on building a creative community and optimizing the user experience in designing and shopping for clothing.",
    },
    {
      imageSrc: require('../../../img/portfolio4.png'),
      title: 'Fashion AI Technology: Woman Sketching',
      description: "A portfolio project showcasing WHEAR's innovative fashion AI technology, featuring a woman sketching her personal style and optimizing the customer experience in building personal wardrobes.",
    },
  ];

  return (
    <div>
      <Header />
      <section className="portfolio">
        <Typography variant="h1" style={{ fontFamily: 'Avenir', fontSize: '60px', fontWeight: 'bold', marginBottom:'20px' }}>
          My Portfolio
        </Typography>
        <Typography variant="body1" style={{ fontFamily: 'Avenir', fontSize: '20px', textAlign: 'center', fontWeight: 'bold', marginBottom:'60px' }}>
          A diverse portfolio of innovative fashion and technology projects.
        </Typography>
        <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="image-container-portfolio">
          {portfolioItems.map((item, index) => (
            <Grid key={index} item xs={6} className="portfolio-image-container" onClick={() => handleImageClick(item)}>
              <img src={item.imageSrc} alt={`Image ${index + 1}`} className="portfolio-image" style={{marginLeft:'190px'}}/>
            </Grid>
          ))}
        </Grid>
      </section>
      <Footer />

      {/* Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={style}>
          {selectedItem && (
            <div>
              <img src={selectedItem.imageSrc} alt={`Selected Image`} style={{ width: '500px', height: 'auto' }} />
              <Typography variant="h2" style={{ fontFamily: 'Avenir', fontSize: '24px', textAlign: 'center',  fontWeight: 'bold', marginTop: '10px' }}>        
                {selectedItem.title}
              </Typography>
              <Typography variant="body2" style={{ fontFamily: 'Avenir', fontSize: '16px', textAlign: 'center', marginTop: '10px' }}>
                {selectedItem.description}
              </Typography>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Portfolio;
