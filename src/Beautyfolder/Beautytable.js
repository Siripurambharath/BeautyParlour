import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Stack,
  TextField,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';
import Navbar from './Navbar';

const BeautyTable = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    axios.get('http://localhost:5000/api/registrations')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch(`http://localhost:5000/deletecustomer/${id}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete user');
        }
  
        alert('User deleted successfully');
        window.location.reload(); // or update state to remove user from UI
      } catch (error) {
        console.error('Delete Error:', error);
        alert('Failed to delete user');
      }
    }
  };
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.PhoneNumber.includes(search) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Navbar />

      <Box sx={{ maxWidth: 1300, mx: 'auto', p: 1, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', color: 'primary.main', mb: 2 }}>
          Beauty-Parlour Customers Table
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <TextField
            id="search"
            label="Search by Name / Mobile / Email"
            variant="outlined"
            value={search}
            onChange={handleSearchChange}
            placeholder="Type name, mobile number, or email..."
            size="small"
            sx={{ width: 300 }}
          />
          <Button variant="contained" component={Link} to="/beautyRegister">
            <AddIcon sx={{ mr: 1 }} /> Add New Customer
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#1976d2' }}>
              <TableRow>
                {['ID', 'Name', 'Service', 'Phone Number', 'Email', 'Address', 'Location', 'Amount', 'Date', 'Actions'].map((head) => (
                  <TableCell key={head} sx={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
                    <strong>{head}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
            {filteredUsers
  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  .map((user, index) => (
    <TableRow key={user.id}>
      <TableCell sx={{ textAlign: 'center' }}>{page * rowsPerPage + index + 1}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{user.name}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{user.Service}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{user.PhoneNumber}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{user.email}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{user.address}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>{user.Location}</TableCell>
      <TableCell sx={{ textAlign: 'center' }}>
        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(user.Amount)}
      </TableCell>
      <TableCell sx={{ textAlign: 'center' }}>
        {new Date(user.Date).toLocaleDateString('en-IN')}
      </TableCell>
      <TableCell sx={{ textAlign: 'center' }}>
        <Stack direction="row" spacing={1} justifyContent="center">
          <IconButton color="info" component={Link} to={`/beautyview/${user.id}`} size="small">
            <VisibilityIcon />
          </IconButton>
          <IconButton color="secondary" component={Link} to="/beautyedit" size="small">
            <EditIcon />
          </IconButton>
          <IconButton color="error" size="small" onClick={() => handleDelete(user.id)}>
  <DeleteIcon />
</IconButton>

        </Stack>
      </TableCell>
    </TableRow>
))}
          </TableBody>
          </Table>

          <TablePagination
            component="div"
            count={filteredUsers.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 15]}
          />
        </TableContainer>
      </Box>
    </Box>
  );
};

export default BeautyTable;
