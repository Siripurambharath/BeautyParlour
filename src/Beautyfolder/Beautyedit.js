import React, { useState } from 'react';
import {
  Box, TextField, FormControl, MenuItem, InputLabel, Select,
  Button, Paper, Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Navbar from './Navbar';

const Beautyedit = () => {
  const navigate = useNavigate();
  
  const today = new Date().toISOString().split('T')[0];
  
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    service: '',
    location: '',
    serviceDate: today,  // Default today's date
    estimatedCost: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/beautytable');
  };

  return (
    <>
      <Navbar/>

      {/* Form */}
      <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
        <Paper elevation={3} sx={{ p: 3, mb: 1, maxWidth: 700, height: 440, mx: 'auto' }}>
          <Box sx={{ backgroundColor: '#29b6f6', padding: 2 ,mb:2}}>
            <Typography variant='h5' sx={{ textAlign: 'center', color: '#7b1fa2' }}>
              <strong>Update Form</strong>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <TextField fullWidth label="Full Name" margin="normal" />
            <TextField fullWidth label="Phone Number" margin="normal" type="number" />
          </Box>
   
          <Box sx={{ display: 'flex', gap: 3 }}>
            <TextField fullWidth label="Email" margin="normal" type="email" />
            <TextField fullWidth label="Address" margin="normal" />
          </Box>

          <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="service-label">Service</InputLabel>
              <Select labelId="service-label" defaultValue="">
                <MenuItem value="haircut">Haircut</MenuItem>
                <MenuItem value="facial">Facial</MenuItem>
                <MenuItem value="makeup">Makeup</MenuItem>
                <MenuItem value="face-makeup">Pedicure</MenuItem>
                <MenuItem value="skin">Skin</MenuItem>
              </Select>
            </FormControl>
     
            <FormControl fullWidth>
              <InputLabel id="location-label">Location</InputLabel>
              <Select labelId="location-label" defaultValue="">
                <MenuItem value="Sircilla">Sircilla</MenuItem>
                <MenuItem value="Chandrampet">Chandrampet</MenuItem>
                <MenuItem value="Mandepelly">Mandepelly</MenuItem>
                <MenuItem value="Agraharam">Agraharam</MenuItem>
                <MenuItem value="Ragudu">Ragudu</MenuItem>
                <MenuItem value="ChinnaBonala">Chinna Bonala</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <TextField
              fullWidth
              type="date"
              margin="normal"
              name="serviceDate"
              value={formData.serviceDate}
              onChange={(e) => setFormData({ ...formData, serviceDate: e.target.value })}
            />
            <TextField fullWidth label="Estimated Cost" type="number" margin="normal" />
          </Box>

          <Box sx={{ mt: 2 ,textAlign:'center'}}>
            <Button type="submit" variant="contained" color="primary">
              Update 
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Beautyedit;
