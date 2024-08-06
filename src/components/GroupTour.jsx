
import React from 'react';
import NavBar from './NavBar';
import MyFooter from './MyFooter';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import Popular from './Popular';
import PopularDisplay from './PopularDisplay';
import { HoneySliderData } from './HoneySliderData';
import { GroupData } from './GroupData';
function GroupTour() {
  return (
    <div style={styles.container}>
      <NavBar />
      <div style={styles.content}>
      </div>
      <>
      <ImageSlider slides={GroupData}/>
      <PopularDisplay/>
      </>
      <MyFooter />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
  },
};

export default GroupTour;
