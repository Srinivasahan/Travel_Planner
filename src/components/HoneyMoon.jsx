
import React from 'react';
import NavBar from './NavBar';
import MyFooter from './MyFooter';
import PopularDisplay from './PopularDisplay';
import { HoneySliderData } from './HoneySliderData';
import HoneyImageSlider from './HoneyImageSlider';
import HoneyDisplay from './HoneyDisplay';
function Honeymoon() {
  return (
    <div style={styles.container}>
      <NavBar />
      <div style={styles.content}>
      </div>
      <>
      <HoneyImageSlider slides={HoneySliderData}/>
      <HoneyDisplay/>
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

export default Honeymoon;
