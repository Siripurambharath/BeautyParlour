import { Box, Container, Grid, TextField, Typography, Button, InputAdornment, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginCar = () => {
  
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      
      {/* LEFT SIDE TYPOGRAPHY */}
      <Box
        sx={{
          flex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pl: 2,
        }}
      >
        <Box>
          <Typography variant="h2" fontWeight="bold" color="primary" gutterBottom>
            Beauty Parlour
          </Typography>
          <Typography variant="h6">
            A sweet escape…<br />
            The place that leaves you feeling great
            The place that beautifies your face<br />
            Where we love to exceed your expectations.
          </Typography>
        </Box>
      </Box>

      {/* RIGHT SIDE LOGIN FORM */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingRight: 9,
        }}
      >
        <Box
          sx={{
            maxWidth: 450,
            p: 1,
            border: '3px solid #ccc',
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: '#fff',
          }}
        >
          <Container maxWidth="sm" sx={{ mt: 2 }}>
            <Typography variant="h5" sx={{ color: '#9c27b0' }} gutterBottom align="center">
              Login
            </Typography>
            <form>
              <Grid container spacing={1}>
                <TextField label="First Name" fullWidth required margin="normal" />
                <TextField label="Phone Number" fullWidth required margin="normal" type="number" />
                <TextField
                  label="Password"
                  fullWidth
                  required
                  margin="normal"
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility} edge="end" size="small">
                          {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Button
                type="submit"
                variant="contained"
                component={Link}
                to="/beautytable"
                fullWidth
                sx={{ mt: 3,mb:2, }}
              >
                Submit
              </Button>
            </form>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginCar;
