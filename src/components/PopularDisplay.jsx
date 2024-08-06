import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Popular } from './Popular';

function PopularDisplay() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/tours/${id}`);
  };

  return (
    <>
      <Box sx={{ bgcolor: 'black', color: 'white', p: 2 }}>
        <Typography
          variant="h5"
          sx={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'bold',
            fontSize: '30px',
          }}
        >
          Popular Packages
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          paddingTop: 8,
        }}
      >
        {Popular.map((menu) => (
          <Card
            key={menu.id}
            sx={{ maxWidth: 450, display: 'flex', m: 2 }}
            onClick={() => handleCardClick(menu.id)}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: '500px' }}
                component={'img'}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  <b>{menu.name}</b>
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography>
                  <b>Rating</b> {menu.Rating}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default PopularDisplay;
