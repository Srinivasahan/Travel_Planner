import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid, MenuItem } from '@mui/material';
import NavBar from './NavBar';
import axios from 'axios';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phoneNumber: '',
    email: '',
    numberOfMembers: '',
    numberOfDays: '',
    packageAmount: '',
    queries: '',
    tourLocation: '',
    tourType: '',
    language: '', // Ensure this field is included
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/enquiry', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting enquiry:', error);
    }
  };

  return (
    <>
      <NavBar />
      <Box sx={styles.formContainer}>
        {!submitted ? (
          <form onSubmit={handleSubmit} style={styles.form}>
            <Typography variant="h4" sx={styles.header}>Enquiry Form</Typography>
            <Grid container spacing={2}>
              {formFields.map((field, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label={field.label}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    type={field.type || 'text'}
                    required={field.required}
                  />
                </Grid>
              ))}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Tour Location"
                  name="tourLocation"
                  value={formData.tourLocation}
                  onChange={handleChange}
                  required
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Tour Type"
                  name="tourType"
                  value={formData.tourType}
                  onChange={handleChange}
                  select
                  required
                >
                  {tourTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Preferred Language for Communication"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  select
                  required
                >
                  {languages.map((lang) => (
                    <MenuItem key={lang} value={lang}>
                      {lang}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Queries"
                  name="queries"
                  value={formData.queries}
                  onChange={handleChange}
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" sx={styles.submitButton}>
              Submit
            </Button>
          </form>
        ) : (
          <Typography variant="h5" sx={styles.thankYouMessage}>
            Thank you! We will reach you out soon!
          </Typography>
        )}
      </Box>
    </>
  );
};

const formFields = [
  { label: 'Name', name: 'name', required: true },
  { label: 'Location', name: 'location', required: true },
  { label: 'Phone Number', name: 'phoneNumber', type: 'tel', required: true },
  { label: 'Email', name: 'email', type: 'email', required: true },
  { label: 'Number of Members', name: 'numberOfMembers', type: 'number', required: true },
  { label: 'Number of Days', name: 'numberOfDays', type: 'number', required: true },
  { label: 'Expected Package Amount', name: 'packageAmount', type: 'number', required: true },
];

const tourTypes = ['Family', 'Couple', 'Friends'];
const languages = ['Tamil', 'English', 'Hindi', 'Malayalam', 'Kannada']; // Updated to reflect the correct name

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
  },
  form: {
    width: '100%',
  },
  header: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  submitButton: {
    marginTop: '20px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  thankYouMessage: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default EnquiryForm;
