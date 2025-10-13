'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  Grid,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Tabs,
  Tab,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, Edit, Delete, Person } from '@mui/icons-material';

export default function UserAccount() {
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      userName: 'admin',
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@autofurnish.com',
      phone: '+91-9876543210',
      role: 'Admin',
      department: 'IT',
      status: 'Active',
    },
    {
      id: 2,
      userName: 'manager1',
      firstName: 'Store',
      lastName: 'Manager',
      email: 'manager@autofurnish.com',
      phone: '+91-9876543211',
      role: 'Store Manager',
      department: 'Operations',
      status: 'Active',
    },
  ]);

  const columns = [
    { field: 'userName', headerName: 'Username', width: 130 },
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 140 },
    { field: 'role', headerName: 'Role', width: 130 },
    { field: 'department', headerName: 'Department', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === 'Active' ? 'success' : 'default'}
          size="small"
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <Box>
          <IconButton size="small" color="primary">
            <Edit fontSize="small" />
          </IconButton>
          <IconButton size="small" color="error">
            <Delete fontSize="small" />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight={600}>
          User Account Management
        </Typography>
        <Button variant="contained" startIcon={<Add />} onClick={() => setOpenDialog(true)}>
          Add User
        </Button>
      </Box>

      <Paper>
        <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
          <Tab label="User List" />
          <Tab label="Create User" />
        </Tabs>

        {tabValue === 0 && (
          <Box sx={{ height: 600 }}>
            <DataGrid
              rows={users}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10, 25, 50]}
              checkboxSelection
              disableSelectionOnClick
            />
          </Box>
        )}

        {tabValue === 1 && (
          <Box sx={{ p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Username" required />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Email" type="email" required />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="First Name" required />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Last Name" required />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Password" type="password" required />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Phone" required />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Role</InputLabel>
                  <Select label="Role">
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Store Manager">Store Manager</MenuItem>
                    <MenuItem value="Finance">Finance</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Department" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Address" multiline rows={2} />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" size="large" startIcon={<Person />}>
                  Create User
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
