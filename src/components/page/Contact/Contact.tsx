import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container, Typography, TextField, Button, Grid, Snackbar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<keyof FormData, boolean>>({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const isValidPhoneNumber = (phone: string): boolean => {
    const phonePattern = /^(\+84|0)?[0-9]{9,10}$/;
    return phonePattern.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form fields
    const newFormErrors: Record<keyof FormData, boolean> = {
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      message: false,
    };

    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        newFormErrors[key as keyof FormData] = true;
      }
    });

    if (!isValidPhoneNumber(formData.phone)) {
      newFormErrors.phone = true;
    }

    if (Object.values(newFormErrors).some((error) => error)) {
      setFormErrors(newFormErrors);
      return;
    }

    // Simulate form submission (replace with actual logic)
    setTimeout(() => {
      setSubmitSuccess(true);
      setSnackbarOpen(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <>
      <Header />
          {/* Success Snackbar */}
          <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Form submitted successfully!"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
      <Container maxWidth="md">
        <Typography variant="h1" style={{ fontFamily: 'Avenir', fontSize: '64px', fontWeight: 'bold', margin: '20px 0' }}>
          GET IN TOUCH
        </Typography>
        <Typography variant="body1" style={{ fontFamily: 'Avenir', fontSize: '20px', fontWeight: 'bold', margin: '20px 0' }}>
          We would love to hear from you! Whether you have a question or just want to say hello, please feel free to reach out to us. Send Us a Message
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="First Name*"
                variant="outlined"
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={formErrors.firstName}
                helperText={formErrors.firstName ? 'This field is required' : ''}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name*"
                variant="outlined"
                fullWidth
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={formErrors.lastName}
                helperText={formErrors.lastName ? 'This field is required' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email*"
                variant="outlined"
                fullWidth
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={formErrors.email}
                helperText={formErrors.email ? 'This field is required' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone*"
                variant="outlined"
                fullWidth
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={formErrors.phone}
                helperText={formErrors.phone ? 'Invalid phone number' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message*"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={formErrors.message}
                helperText={formErrors.message ? 'This field is required' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                style={{ backgroundColor: '#BAF667', color: 'white' }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
