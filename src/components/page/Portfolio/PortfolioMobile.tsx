import React, { useState } from 'react';
import { Typography, Modal, Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './PortfolioMobile.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTopButton from '../ScrollToTop/ScrollToTopButton';

interface PortfolioItem {
  imageSrc: string;
  title: string;
  description: string;
}

const PortfolioMobile: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const handleOpenModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const portfolioItems: PortfolioItem[] = [
    {
      imageSrc: require('../../../img/portfolio1.jpg'),
      title: 'Image Title',
      description: 'Content',
    },
    {
      imageSrc: require('../../../img/portfolio2.jpeg'),
      title: 'Image Title',
      description: 'Content',
    },
    {
      imageSrc: require('../../../img/portfolio3.jpg'),
      title: 'Image Title',
      description: 'Content',    },
    {
      imageSrc: require('../../../img/portfolio4.jpg'),
      title: 'Image Title',
      description: 'Content',    },
    {
      imageSrc: require('../../../img/portfolio5.jpg'),
      title: 'Image Title',
      description: 'Content',    },
    {
      imageSrc: require('../../../img/portfolio6.jpg'),
      title: 'Image Title',
      description: 'Content',    },
     {
      imageSrc: require('../../../img/portfolio7.jpg'),
      title: 'Image Title',
      description: 'Content',    },
    {
      imageSrc: require('../../../img/portfolio8.jpg'),
      title: 'Image Title',
      description: 'Content',    },
    {
      imageSrc: require('../../../img/portfolio9.jpg'),
      title: 'Image Title',
      description: 'Content',    },
    {
      imageSrc: require('../../../img/portfolio10.jpg'),
      title: 'Image Title',
      description: 'Content',    },
    {
      imageSrc: require('../../../img/portfolio11.jpeg'),
      title: 'Image Title',
      description: 'Content',    },
    {
      imageSrc: require('../../../img/portfolio12.jpg'),
      title: 'Image Title',
      description: 'Content',    },
  ];

  return (
    <div>
      <Header />
      <ScrollToTopButton />
      <section className="portfolio-mobile">
        <Typography variant="h1" style={{ fontFamily: 'Poppins', fontSize: '30px', fontWeight: 'bold', textAlign:'center'}}>
          My Portfolio
        </Typography>
        <Typography variant="body1" style={{textAlign:'center'}}>
          A diverse portfolio of innovative fashion and technology projects.
        </Typography>
        <Box sx={{ width: '100%' }} className="ImageList-mobile" style={{ margin: 'auto' }}>
          <ImageList variant="masonry" cols={3} gap={9}>
            {portfolioItems.map((item) => (
              <ImageListItem key={item.imageSrc} onClick={() => handleOpenModal(item)}>
                <img
                  srcSet={`${item.imageSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.imageSrc}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </section>

      {/* Modal */}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box sx={{ width: '80%', padding: 2, textAlign: 'center', margin: 'auto', marginTop: '8px' }}>
          {selectedItem && (
            <>
              <img
                src={selectedItem.imageSrc}
                alt={selectedItem.title}
                style={{ width: '100%', height: 'auto', marginBottom: '8px' }}
              />
              <Typography variant="h5" style={{ fontFamily: 'Poppins', color:"#fff" }}>
                {selectedItem.title}
              </Typography>
              <Typography variant="body2" style={{ fontFamily: 'Poppins', color:"#fff" }}>
                {selectedItem.description}
              </Typography>
            </>
          )}
        </Box>
      </Modal>

      <Footer />
    </div>
  );
};

export default PortfolioMobile;
