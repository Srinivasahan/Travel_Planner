import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function About() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const styles = {
    otherButton: {
      padding: '10px 20px',
      backgroundColor: '#be7ad6',
      color: '#f2f0f2',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  return (
    <React.Fragment>
      <button onClick={handleClickOpen} style={styles.otherButton}>About Us</button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          About Us
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
          We believe travel is more than just visiting places—it's about creating unforgettable experiences. Our travel planning services are designed to tailor unique itineraries that cater to your interests and budget. Whether you're seeking adventure, relaxation, or cultural exploration, we handle every detail from flights and accommodations to local tours and hidden gems. With a passion for discovery and a commitment to excellence, we strive to make your journey seamless and memorable. Let us turn your travel dreams into reality, providing you with the perfect blend of adventure and comfort.<br></br>Our dedicated team is committed to our environmental values through our Green Tourism advocacy.
Our tour prices are inclusive with no hidden extras or fees.
We instill a very flexible approach to individual requests
Our packages are crafted with your satisfaction in mind
We offer exceptional value for money
          </Typography>
         
        </DialogContent>
       
      </BootstrapDialog>
    </React.Fragment>
  );
}
