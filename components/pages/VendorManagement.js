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
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, Edit, Delete, Business } from '@mui/icons-material';

export default function VendorManagement() {
  const [openDialog, setOpenDialog] = useState(false);
  const [vendors, setVendors] = useState([
    {
      id: 1,
      companyName: 'ABC Auto Parts Pvt Ltd',
      gstNo: '27AAAAA0000A1Z5',
      panNo: 'AAAAA0000A',
      contactPerson: 'John Doe',
      email: 'john@abcauto.com',
      phone: '+91-9876543210',
      city: 'Mumbai',
      status: 'Active',
    },
    {
      id: 2,
      companyName: 'XYZ Manufacturing Co',
      gstNo: '29BBBBB1111B1Z5',
      panNo: 'BBBBB1111B',
      contactPerson: 'Jane Smith',
      email: 'jane@xyzmfg.com',
      phone: '+91-9876543211',
      city: 'Bangalore',
      status: 'Active',
    },
  ]);

  const columns = [
    { field: 'companyName', headerName: 'Company Name', width: 200 },
    { field: 'gstNo', headerName: 'GST No', width: 150 },
    { field: 'panNo', headerName: 'PAN No', width: 120 },
    { field: 'contactPerson', headerName: 'Contact Person', width: 150 },
    { field: 'email', headerName: 'Email', width: 180 },
    { field: 'phone', headerName: 'Phone', width: 140 },
    { field: 'city', headerName: 'City', width: 120 },
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
          Vendor Management
        </Typography>
        <Button variant="contained" startIcon={<Add />} onClick={() => setOpenDialog(true)}>
          Add Vendor
        </Button>
      </Box>

      <Paper sx={{ height: 600 }}>
        <DataGrid
          rows={vendors}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Paper>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Business /> Add New Vendor
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField fullWidth label="Company Name" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="GST Number" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="PAN Number" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Contact Person" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Email" type="email" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Phone" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="City" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Address" multiline rows={3} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            Save Vendor
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
