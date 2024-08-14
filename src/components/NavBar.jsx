import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import { UserContext } from './UserContext';

const NavBar = () => {
  const { user, handleLogout } = useContext(UserContext);

  return (
    <div style={styles.navBar}>
      <div style={styles.leftSection}>
        <img src="https://cdn-icons-png.flaticon.com/512/2821/2821971.png" alt="Logo" style={styles.logo} />
        <div style={styles.nameAndButtons}>
          <div style={styles.name}>SRS Holidays</div>
          <div style={styles.buttonContainer}>
            <Link to="/grouptour">
              <button style={styles.otherButton}>Group Tours</button>
            </Link>
            <Link to="/honeymoon">
              <button style={styles.otherButton}>Honeymoon Packages</button>
            </Link>
            <Link to="/contact">
            <button style={styles.otherButton}>Contact</button>
            </Link>
            <Link to="/home">
            <button style={styles.otherButton}>Home</button>
            </Link>
            <Link to="/mybot">
            <button style={styles.otherButton}>Chat with me</button>
            </Link>
            <Link to="/review">
            <button style={styles.otherButton}>Review</button>
            </Link>
            <About />
          </div>
        </div>
      </div>
      <div style={styles.rightSection}>
        {/* {user && <span style={styles.userName}>Welcome, {user.firstName}!</span>} */}
        <Link to="/">
          <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f5ce42',
    color: '#fff',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  logo: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  nameAndButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  name: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginRight: '20px',
    color: '#0d0012',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  userName: {
    fontSize: '16px',
    color: '#fff',
  },
  logoutButton: {
    padding: '10px 20px',
    backgroundColor: '#ff4b5c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  otherButton: {
    padding: '10px 20px',
    backgroundColor: '#be7ad6',
    color: '#f2f0f2',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default NavBar;
