import React, { useState, useEffect } from 'react';
import { Box, Container, TextField, FormControl, InputLabel, Select, MenuItem, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const today = new Date().toISOString().split('T')[0];

const Beautycategory = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    service: '',
    location: '',
    serviceDate: today, 
    estimatedCost: '',
  });
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/services');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Registration Successful!');
        navigate('/beautytable');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting the form.');
    }
  };

  if (loading) return <div>Loading services...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Box>
        <Navbar />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <Box sx={{ maxWidth: 700, mx: 'auto', mt: 2 }} component="form" onSubmit={handleSubmit}>
            <Paper sx={{ maxWidth: 700, p: 3, boxShadow: 3, height: 440 }}>
              <Box sx={{ backgroundColor: '#29b6f6', padding: 2, mb: 2 }}>
                <Typography variant="h5" sx={{ textAlign: 'center', color: '#7b1fa2' }}>
                  <strong>Create a New Customer </strong>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  margin="normal"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  margin="normal"
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Box>

              <Box sx={{ display: 'flex', gap: 3 }}>
                <TextField
                  fullWidth
                  label="Email"
                  margin="normal"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Address"
                  margin="normal"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Box>

              <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="service-label">Service</InputLabel>
                  <Select
                    labelId="service-label"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    label="Service"
                  >
                    {services.map((service) => (
                      <MenuItem key={service.id} value={service.service_name}>
                        {service.service_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="location-label">Location</InputLabel>
                  <Select
                    labelId="location-label"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  >
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
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Estimated Cost"
                  type="number"
                  margin="normal"
                  name="estimatedCost"
                  value={formData.estimatedCost}
                  onChange={handleChange}
                />
              </Box>

              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Button type="submit" variant="contained" color="primary">
                  Submit 
                </Button>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Beautycategory;