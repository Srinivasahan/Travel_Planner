import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { HoneySliderData } from './HoneySliderData';

const HoneyImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section style={styles.slider}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={index === current ? { ...styles.slide, ...styles.activeSlide } : styles.slide}
        >
          {index === current && (
            <div style={styles.imageContainer}>
              <img src={slide.image} alt='travel' style={styles.image} />
              <Typography variant="h6" sx={styles.quote}>
                {slide.quote}
              </Typography>
            </div>
          )}
        </div>
      ))}
      <Grid container justifyContent="center" sx={{ marginTop: "20px" }}>
      </Grid>
    </section>
  );
};

const styles = {
  slider: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '600px', // Constant height for the slider
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  slide: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transitionDuration: '1s ease',
  },
  activeSlide: {
    opacity: 1,
    transitionDuration: '1s',
    transform: 'scale(1.08)',
  },
  imageContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  image: {
    maxWidth: '90%', // Large size for the image
    maxHeight: '90%',
    borderRadius: '15px',
  },
  quote: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '10px',
    fontSize: '1.2em',
    textAlign: 'center',
    maxWidth: '80%',
    fontFamily: 'Cursive, sans-serif',
  },
  sliderQuote: {
    fontFamily: 'Cursive, sans-serif',
    color: '#000',
    fontSize: '1.5em',
    textAlign: 'center',
  },
};

export default HoneyImageSlider;
