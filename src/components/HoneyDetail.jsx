import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { Popular } from './Popular';
import './Detail.css';
import { HoneyDisplayData } from './HoneyDisplayData';
import { Link } from 'react-router-dom';
function HoneyDetail() {
  const { id } = useParams();
  const tour = HoneyDisplayData.find((tour) => tour.id === id);
  if (!tour) {
    return <Typography>Tour not found</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontFamily: 'serif',
          fontSize: '44px',
          fontWeight: 'bold',
          transition: 'text-shadow 0.3s, transform 0.3s',
          '&:hover': {
            textShadow: '0 0 10px rgba(255, 215, 0, 0.7)',
            transform: 'scale(1.05)',
          },
        }}
      >
        {tour.name}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2,'&:hover': {
            textShadow: '0 0 10px rgba(255, 215, 0, 0.7)',
            transform: 'scale(1.05)',transition: 'text-shadow 0.3s, transform 0.3s',
          } }}>
        <img 
          src={tour.image} 
          alt={tour.name} 
          style={{
            width: '100%',
            maxWidth: '740px',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }} 
        />
      </Box>
      <Typography variant="body1" sx={{ mt: 2, fontFamily: 'Arial, sans-serif', fontSize: '24px', fontWeight: 'bold'}}>{tour.description}</Typography>
      <Typography variant="h6" sx={{ mt: 1 }}>Rating: {tour.Rating}</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Link to="/contact">
        <Button 
          variant="contained" 
          color="primary" 
          sx={{
            backgroundColor: '#1976d2',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s, transform 0.3s',
            '&:hover': {
              backgroundColor: '#115293',
              transform: 'scale(1.05)',
            }
          }}
        >
          Book Now
        </Button>
        </Link>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h5">Day-wise Schedule</Typography>
        <Box sx={{ mt: 2 }}>
          {tour.schedule.map((day, index) => (
            <Box key={index} sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#f5f5f5',
              padding: '10px',
              borderRadius: '8px',
              marginBottom: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'box-shadow 0.3s, transform 0.3s',
              // '&:hover': {
              //   boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
              //   transform: 'scale(1.05)',
              // }
            }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', marginRight: '10px' }}>
                Day {day.day}:
              </Typography>
              <Typography variant="body1">
                {day.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 2, border: '1px solid gray', padding: 2 }}>
        <Typography variant="h5">Tourist Spots</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mt: 2 }}>
          {tour.extraImages.map((image, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={image}
                alt={`${tour.name} ${index + 1}`}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  border: '1px solid #ddd',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                className="hover-effect"
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h5">Visual Treat for your eyes!</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mt: 2 }}>
          {tour.videos && tour.videos.map((video, index) => (
            <Box key={index} sx={{ flex: 1 }}>
              <video
                autoPlay
                loop
                muted
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  border: '1px solid #ddd',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default HoneyDetail;
