import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HoneyDisplayData } from './HoneyDisplayData';

function HoneyDisplay() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/coupletours/${id}`);
  };

  return (
    <>
      <Box sx={styles.header}>
        <Typography variant="h5" sx={styles.headerText}>
          Couple Packages
        </Typography>
      </Box>
      <Box sx={styles.container}>
        {HoneyDisplayData.map((menu) => (
          <Card
            key={menu.id}
            sx={styles.card}
            onClick={() => handleCardClick(menu.id)}
          >
            <CardActionArea sx={styles.cardActionArea}>
              <CardMedia
                component={'img'}
                src={menu.image}
                alt={menu.name}
                sx={styles.cardMedia}
              />
              <CardContent sx={styles.cardContent}>
                <Typography variant="h5" gutterBottom>
                  <b>{menu.name}</b>
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
}

const styles = {
  header: {
    backgroundColor: 'black',
    color: 'white',
    padding: '16px 0',
    textAlign: 'center',
  },
  headerText: {
    color: 'white',
    fontFamily: 'bold',
    fontSize: '30px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 8,
  },
  card: {
    maxWidth: 450,
    margin: 8,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    },
  },
  cardActionArea: {
    height: '100%',
  },
  cardMedia: {
    minHeight: '500px',
    filter: 'brightness(90%)',
    transition: 'filter 0.3s ease',
    '&:hover': {
      filter: 'brightness(100%)',
    },
  },
  cardContent: {
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
};

export default HoneyDisplay;
