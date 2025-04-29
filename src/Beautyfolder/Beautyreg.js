import React, { useState } from 'react';
import { Container, Paper, Typography, Tabs, Tab, Box, TextField, 
    FormControl, InputLabel,Select ,MenuItem, Button, } from '@mui/material';
    import { Link } from 'react-router-dom';

const Beautyreg = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, width: '900px', mx: 'auto' }}>
        {/* Header */}
        <Paper sx={{ backgroundColor: '#1976d2', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
            Beauty Parlour Reg Form And Opportunity
          </Typography>
        </Paper>

        {/* Tabs */}
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          sx={{ mt: 2 }}
        >
          <Tab label="Registration Form" />
          <Tab label="Opportunity" />
        </Tabs>

        {/* Tab Panels */}
        <Box sx={{ mt: 3 }}>
          {tabValue === 0 && (
            <Typography variant="h5" textAlign={'center'}> 
              Registration Form Goes Here
            </Typography>
            
          )}
          {tabValue === 0 && (
  <Box component="form" sx={{ mt: 2 }}>
    <TextField
      fullWidth
      label="Full Name"
      variant="outlined"
      margin="normal"
      required
    />

    <TextField
      fullWidth
      label="Email"
      variant="outlined"
      margin="normal"
      type="email"
      required
    />
   <TextField
      fullWidth
      label="Phone Number"
      variant="outlined"
      margin="normal"
      type="number"
      required
    />
       <TextField
      fullWidth
      label="Address"
      variant="outlined"
      margin="normal"
      type="text"
      required
    />
    <FormControl fullWidth margin="normal" required>
      <InputLabel id="service-label">Service</InputLabel>
      <Select labelId="service-label" label="Service" defaultValue="">
        <MenuItem value="haircut">Haircut</MenuItem>
        <MenuItem value="facial">Facial</MenuItem>
        <MenuItem value="makeup">Makeup</MenuItem>
        <MenuItem value="Mandepelly">Pedicure</MenuItem>
        <MenuItem value="Mandepelly">Skin</MenuItem>
      </Select>
    </FormControl>

    <FormControl fullWidth margin="normal" required>
      <InputLabel id="location-label">Location</InputLabel>
      <Select labelId="location-label" label="Location" defaultValue="">
        <MenuItem value="Sircilla">Sircilla</MenuItem>
        <MenuItem value="Chandrampet">Chandrampet</MenuItem>
        <MenuItem value="Mandepelly">Mandepelly</MenuItem>
        <MenuItem value="Mandepelly">Ragudu</MenuItem>
        <MenuItem value="Mandepelly">Chinna Bonala</MenuItem>
        <MenuItem value="Mandepelly">Agraharam</MenuItem>
      </Select>
    </FormControl>
    

    <TextField
      fullWidth
      label=""
      variant="outlined"
      margin="normal"
      type="date"
      required
    />
       <TextField
      fullWidth
      label="Estimated Cost"
      variant="outlined"
      margin="normal"
      type="number"
      required
    />

   <Box >
    <Button type="submit" variant="contained" 
    component={Link}
     to="/beautytable" color="primary"
     >Submit Form</Button>
</Box>
    
  </Box>
)}

          {tabValue === 1 && (
            <Typography variant="h5" textAlign={'center'}>
              Opportunity Create
            </Typography>
          )}
                    {tabValue === 1 && (
  <Box component="form" sx={{ mt: 2 }}>
    <TextField
      fullWidth
      label="Full Name"
      variant="outlined"
      margin="normal"
      required
    />

    <TextField
      fullWidth
      label="Email"
      variant="outlined"
      margin="normal"
      type="email"
      required
    />
   <TextField
      fullWidth
      label="Phone Number"
      variant="outlined"
      margin="normal"
      type="number"
      required
    />
           <TextField
      fullWidth
      label="Address"
      variant="outlined"
      margin="normal"
      type="text"
      required
    />
    <FormControl fullWidth margin="normal" required>
      <InputLabel id="service-label">Service</InputLabel>
      <Select labelId="service-label" label="Service" defaultValue="">
        <MenuItem value="haircut">Haircut</MenuItem>
        <MenuItem value="facial">Facial</MenuItem>
        <MenuItem value="makeup">Makeup</MenuItem>
        <MenuItem value="Mandepelly">FaceMakeup</MenuItem>
        <MenuItem value="Mandepelly">Skin</MenuItem>
      </Select>
    </FormControl>

    <FormControl fullWidth margin="normal" required>
      <InputLabel id="location-label">Location</InputLabel>
      <Select labelId="location-label" label="Location" defaultValue="">
        <MenuItem value="Sircilla">Sircilla</MenuItem>
        <MenuItem value="Chandrampet">Chandrampet</MenuItem>
        <MenuItem value="Mandepelly">Mandepelly</MenuItem>
        <MenuItem value="Mandepelly">Ragudu</MenuItem>
        <MenuItem value="Mandepelly">Chinna Bonala</MenuItem>
        <MenuItem value="Mandepelly">Agraharam</MenuItem>
      </Select>
    </FormControl>

    <TextField
      fullWidth
      label=""
      variant="outlined"
      margin="normal"
      type="date"
      required
    />
       <TextField
      fullWidth
      label="Estimated Cost"
      variant="outlined"
      margin="normal"
      type="number"
      required
    />

   <Box >
    <Button type="submit" variant="contained" 
    component={Link}
     to="/beautytable" color="success"
     >Submit Form</Button>
</Box>
    
  </Box>
)}
        </Box>
      </Paper>
    </Container>
  );
};

export default Beautyreg;
