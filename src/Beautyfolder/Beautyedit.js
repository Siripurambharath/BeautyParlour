import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box, TextField, FormControl, MenuItem, InputLabel, Select,
  Button, Paper, Typography
} from '@mui/material';
import Navbar from './Navbar';

const Beautyedit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];
  const formatDate = (dateString) => {
    if (!dateString) return today;
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return today;
    return date.toISOString().split('T')[0];
  };
  
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

  // Fetch services and customer data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch services
        const servicesResponse = await fetch('http://localhost:5000/api/services');
        if (!servicesResponse.ok) throw new Error('Failed to fetch services');
        const servicesData = await servicesResponse.json();
        setServices(servicesData);

        // Fetch customer data
        const customerResponse = await fetch(`http://localhost:5000/customer/${id}`);
        if (!customerResponse.ok) throw new Error('Failed to fetch customer data');
        const customerData = await customerResponse.json();
        
        setFormData({
          fullName: customerData.fullName || '',
          phoneNumber: customerData.phoneNumber || '',
          email: customerData.email || '',
          address: customerData.address || '',
          service: customerData.service || '',
          location: customerData.location || '',
          serviceDate: formatDate(customerData.serviceDate),
          estimatedCost: customerData.estimatedCost || '',
        });

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/updatecustomer/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          address: formData.address,
          service: formData.service,
          location: formData.location,
          serviceDate: formData.serviceDate,
          estimatedCost: formData.estimatedCost
        }),
      });

      if (response.ok) {
        alert('Customer updated successfully!');
        navigate('/beautytable');
      } else {
        const errorData = await response.json();
        alert(`Update failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error updating customer:', error);
      alert('Error updating customer. Please try again.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Navbar/>

      <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
        <Paper elevation={3} sx={{ p: 3, mb: 1, maxWidth: 700, mx: 'auto' }}>
          <Box sx={{ backgroundColor: '#29b6f6', padding: 2, mb: 2 }}>
            <Typography variant='h5' sx={{ textAlign: 'center', color: '#7b1fa2' }}>
              <strong>Update Form</strong>
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
              required
            />
            <TextField 
              fullWidth 
              label="Phone Number" 
              margin="normal" 
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
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
              required
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
            <FormControl fullWidth required>
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
     
            <FormControl fullWidth required>
              <InputLabel id="location-label">Location</InputLabel>
              <Select 
                labelId="location-label"
                name="location"
                value={formData.location}
                onChange={handleChange}
                label="Location"
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
              required
              inputProps={{
                min: today // Prevent selecting past dates
              }}
            />
            <TextField 
              fullWidth 
              label="Estimated Cost" 
              type="number" 
              margin="normal"
              name="estimatedCost"
              value={formData.estimatedCost}
              onChange={handleChange}
              required
              inputProps={{
                min: 0 // Prevent negative numbers
              }}
            />
          </Box>

          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Button type="submit" variant="contained" color="primary" size="large">
              Update Customer
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Beautyedit;