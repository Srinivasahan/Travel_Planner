import React, { useState, useEffect } from 'react';
import { Button, Grid } from '@mui/material';
import './Imageslider.css';
import { SliderData } from './SliderData';
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <Grid container direction={"column"} sx={{ marginTop: "75px", paddingLeft: '30px', paddingTop: '39px', color: '', height: '550px' }}>
        <Grid item>
          <p><b>"Not all those who wander<br></br> are lost"</b></p>
        </Grid>
      </Grid>
      {SliderData.map((slide, index) => {
        return(
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
