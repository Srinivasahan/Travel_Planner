import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
const MyFooter = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f5ce42',
    borderTop: '1px solid #e7e7e7',
  };

  const columnStyle = {
    flex: 1,

  };

  return (
    <footer style={footerStyle}>
      <div style={columnStyle}>
        <h4>Reach us</h4>
        <a href='https://www.instagram.com/'><InstagramIcon/></a>{"        "}
        <a href='mailto:srinivasayyappan13@gmail.com'><EmailIcon/></a>
        <a href='https://www.linkedin.com/'><LinkedInIcon/></a>
        <a href='tel:+91 9384155928'><CallIcon/></a>
      </div>
    
    </footer>
  );
};

export default MyFooter;
