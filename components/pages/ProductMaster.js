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
import { Add, Edit, Delete, Upload, Download, Search } from '@mui/icons-material';

export default function ProductMaster() {
  const [openDialog, setOpenDialog] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      sku: 'AF-001',
      psku: 'PAF-001',
      msku: 'MAF-001',
      productName: 'Car Floor Mat',
      category: 'Accessories',
      brand: 'AutoFurnish',
      mrp: 2500,
      sellingPrice: 1999,
      gst: 18,
      status: 'Active',
    },
    {
      id: 2,
      sku: 'AF-002',
      psku: 'PAF-002',
      msku: 'MAF-002',
      productName: 'Seat Cover Set',
      category: 'Accessories',
      brand: 'AutoFurnish',
      mrp: 3500,
      sellingPrice: 2799,
      gst: 18,
      status: 'Active',
    },
  ]);

  const columns = [
    { field: 'sku', headerName: 'SKU', width: 120 },
    { field: 'psku', headerName: 'PSKU', width: 120 },
    { field: 'msku', headerName: 'MSKU', width: 120 },
    { field: 'productName', headerName: 'Product Name', width: 200 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'brand', headerName: 'Brand', width: 130 },
    { field: 'mrp', headerName: 'MRP', width: 100 },
    { field: 'sellingPrice', headerName: 'Selling Price', width: 120 },
    { field: 'gst', headerName: 'GST %', width: 80 },
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
          Product Master
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" startIcon={<Upload />}>
            Bulk Upload
          </Button>
          <Button variant="outlined" startIcon={<Download />}>
            Download Format
          </Button>
          <Button variant="contained" startIcon={<Add />} onClick={() => setOpenDialog(true)}>
            Add Product
          </Button>
        </Box>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="Search by SKU" size="small" />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Category</InputLabel>
              <Select label="Category">
                <MenuItem value="Accessories">Accessories</MenuItem>
                <MenuItem value="Parts">Parts</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Status</InputLabel>
              <Select label="Status">
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button fullWidth variant="contained" startIcon={<Search />} sx={{ height: '40px' }}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ height: 500 }}>
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Paper>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="SKU" required />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="PSKU" />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="MSKU" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Product Name" required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Category" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Brand" />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField fullWidth label="MRP" type="number" />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField fullWidth label="Selling Price" type="number" />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField fullWidth label="GST %" type="number" />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField fullWidth label="Weight (kg)" type="number" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            Save Product
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
