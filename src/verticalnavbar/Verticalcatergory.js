import React, { useState, useEffect } from 'react';
import axios from 'axios'; // <-- Add this
import {

  Box,
Typography,
  IconButton,
  Button,
  Paper,
  Container,
  TextField,
 Table,
  TableContainer,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';


const Beautycategory = () => {
  const [view, setView] = useState(null);
  const [rows, setRows] = useState([]);
  const [newService, setNewService] = useState('');
  
  const [editId, setEditId] = useState(null);
const [editServiceName, setEditServiceName] = useState('');


  const navigate = useNavigate();

  // Load services from API
  const fetchServices = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/services');
      setRows(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleLogoClick = (event) => { };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/services/${id}`);
      fetchServices();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddService = async () => {
    if (!newService.trim()) return;

    try {
      await axios.post('http://localhost:5000/api/services', { service_name: newService });
      setNewService('');
      fetchServices();
    } catch (err) {
      console.error(err);
    }
  };

  const startEditing = (row) => {
    setEditId(row.id);
    setEditServiceName(row.service_name);
  };
  
  const handleUpdateService = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/services/${id}`, { service_name: editServiceName });
      setEditId(null);
      setEditServiceName('');
      fetchServices();
    } catch (err) {
      console.error(err);
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/beautytable');
  };

  return (
    <>
     
      <Box>



      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {/* CATEGORY VIEW */}
       
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Services Section</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <TextField
                placeholder="Enter new service..."
                variant="outlined"
                size="small"
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
                sx={{
                  width: 400,
                  backgroundColor: 'white',
                  '& fieldset': {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderRight: 'none',
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddService}
                sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                <AddIcon />
              </Button>
            </Box>

            {/* Calendar Icon + Search (you can connect search later) */}
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Box display="flex" alignItems="center" gap={2}>
                <TextField variant="outlined" placeholder="Search..." size="small" sx={{ width: '170px' }} />
                <IconButton color="primary">
                  <CalendarTodayIcon />
                </IconButton>
              </Box>
            </Box>

            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#42a5f5' }}>
                    <TableCell align="center"><b>S.NO</b></TableCell>
                    <TableCell align="center"><b>Services</b></TableCell>
                    <TableCell align="center"><b>Actions</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
  {rows.map((row, index) => (
    <TableRow
      key={row.id}
      sx={{ backgroundColor: index % 2 === 0 ? '#eeeeee' : 'transparent' }}
    >
      <TableCell align="center">{index + 1}</TableCell>

      <TableCell align="center">
        {editId === row.id ? (
          <TextField
            value={editServiceName}
            onChange={(e) => setEditServiceName(e.target.value)}
            size="small"
          />
        ) : (
          row.service_name
        )}
      </TableCell>

      <TableCell align="center">
        <Box display="flex" justifyContent="center" gap={1}>
          {editId === row.id ? (
            <>
              <Button
                variant="contained"
                color="success"
                size="small"
                onClick={() => handleUpdateService(row.id)}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={() => {
                  setEditId(null);
                  setEditServiceName('');
                }}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <IconButton color="secondary" size="small" onClick={() => startEditing(row)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" size="small" onClick={() => handleDelete(row.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          )}
        </Box>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

              </Table>
            </TableContainer>
          </Box>
       


       
       
      </Container>
      </Box>
    </>
  );
};

export default Beautycategory;
