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
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, Edit, Delete, LocationOn } from '@mui/icons-material';

export default function VendorAddresses() {
  const [openDialog, setOpenDialog] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      companyName: 'ABC Auto Parts Pvt Ltd',
      gstNo: '27AAAAA0000A1Z5',
      address: '123 Industrial Area, Phase 1',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      contactPerson: 'John Doe',
      email: 'john@abcauto.com',
      phone: '+91-9876543210',
      isActive: true,
    },
    {
      id: 2,
      companyName: 'XYZ Manufacturing Co',
      gstNo: '29BBBBB1111B1Z5',
      address: '456 Tech Park, Whitefield',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560066',
      contactPerson: 'Jane Smith',
      email: 'jane@xyzmfg.com',
      phone: '+91-9876543211',
      isActive: true,
    },
  ]);

  const columns = [
    { field: 'companyName', headerName: 'Company Name', width: 200 },
    { field: 'gstNo', headerName: 'GST No', width: 150 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'city', headerName: 'City', width: 120 },
    { field: 'state', headerName: 'State', width: 130 },
    { field: 'pincode', headerName: 'Pincode', width: 100 },
    { field: 'contactPerson', headerName: 'Contact Person', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 140 },
    {
      field: 'isActive',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => (
        <Chip
          label={params.value ? 'Active' : 'Inactive'}
          color={params.value ? 'success' : 'default'}
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
          Vendor Address Management
        </Typography>
        <Button variant="contained" startIcon={<Add />} onClick={() => setOpenDialog(true)}>
          Add Address
        </Button>
      </Box>

      <Paper sx={{ height: 600 }}>
        <DataGrid
          rows={addresses}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Paper>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocationOn /> Add Vendor Address
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Select Company</InputLabel>
                <Select label="Select Company">
                  <MenuItem value="1">ABC Auto Parts Pvt Ltd</MenuItem>
                  <MenuItem value="2">XYZ Manufacturing Co</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="GST Number" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="PAN Number" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Address Line 1" required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Address Line 2" />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="City" required />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="State" required />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="Pincode" required />
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
              <TextField fullWidth label="Transport" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            Save Address
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
