import React, { useContext } from 'react';
import NavBar from './NavBar';
import MyFooter from './MyFooter';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import PopularDisplay from './PopularDisplay';
import { UserContext } from './UserContext';
import Dialouge from './Dialouge';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  }
};

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div style={styles.container}>
      <NavBar />
      <div style={styles.content}>
        {user && <h1>Welcome {user.firstName}!</h1>}
      </div>
      <div style={styles.content}>
        <marquee>FLAT 25% off on Valentine's week! Pack up your Bags! Have a great date!!!</marquee>
        <ImageSlider slides={SliderData} />
        <PopularDisplay />
      </div>
      <MyFooter />
    </div>
  );
}

export default Home;
