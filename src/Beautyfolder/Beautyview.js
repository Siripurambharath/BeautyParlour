import React, { useEffect, useState } from 'react';
import {
  Card, CardContent, Typography, Box, Grid, Button,
  TableBody, TableCell, TableContainer, Table, Paper, TableRow,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import ladylogo from "../Beautyfolder/images/lady logo.png";
import Navbar from './Navbar';

const StudentDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/customer/${id}`)
      .then(res => res.json())
      .then(data => setCustomer(data))
      .catch(err => console.error('Fetch error:', err));
  }, [id]);

  if (!customer) return <Typography textAlign="center" mt={4}>Loading...</Typography>;

  return (
    <Box>
      <Navbar />
      <Card sx={{ maxWidth: 900, m: 2, p: 2, margin: 'auto', mt: 3 }}>
        <CardContent sx={{ backgroundColor: '#a7ffeb', borderRadius: 2, p: 3 }}>
          <Typography variant="h4" sx={{ color: 'error.main', textAlign: 'center' }} gutterBottom>
            View Details
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <img src={ladylogo} alt="logo" style={{ width: 200 }} />
          </Box>

          <TableContainer component={Paper} sx={{ mt: 3, width: 650, mx: 'auto', display: 'block' }}>
            <Table>
              <TableBody>
                <TableRow sx={{ backgroundColor: '#d9f9fd' }}>
                  <TableCell sx={{ pl: 5 }}><b>Name:</b></TableCell>
                  <TableCell>{customer.fullName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ pl: 5 }}><b>Service:</b></TableCell>
                  <TableCell>{customer.service}</TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: '#d9f9fd' }}>
                  <TableCell sx={{ pl: 5 }}><b>Phone Number:</b></TableCell>
                  <TableCell>{customer.phoneNumber}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ pl: 5 }}><b>Email:</b></TableCell>
                  <TableCell>{customer.email}</TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: '#d9f9fd' }}>
                  <TableCell sx={{ pl: 5 }}><b>Address:</b></TableCell>
                  <TableCell>{customer.address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ pl: 5 }}><b>Location:</b></TableCell>
                  <TableCell>{customer.location}</TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: '#d9f9fd' }}>
                  <TableCell sx={{ pl: 5 }}><b>Amount:</b></TableCell>
                  <TableCell>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(customer.estimatedCost)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ pl: 5 }}><b>Date:</b></TableCell>
                  <TableCell>{new Date(customer.serviceDate).toLocaleDateString('en-IN')}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>

        <Grid item xs={12} sx={{ mt: 2, textAlign: 'center' }}>
          <Button
            variant="contained"
            component={Link}
            to="/beautytable"
            sx={{ backgroundColor: 'silver', color: 'black' }}
          >
            Back To List
          </Button>
        </Grid>
      </Card>
    </Box>
  );
};

export default StudentDetails;
