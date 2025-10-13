'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Chip,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Save, Lock, Visibility } from '@mui/icons-material';

export default function InventoryReserve() {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      reservationNo: 'RES-2024-001',
      sku: 'AF-001',
      productName: 'Car Floor Mat',
      quantity: 50,
      warehouse: 'Warehouse A',
      reservedFor: 'Order Batch #123',
      reservedDate: '2024-01-10',
      status: 'Reserved',
    },
    {
      id: 2,
      reservationNo: 'RES-2024-002',
      sku: 'AF-002',
      productName: 'Seat Cover Set',
      quantity: 30,
      warehouse: 'Warehouse B',
      reservedFor: 'Order Batch #124',
      reservedDate: '2024-01-11',
      status: 'Reserved',
    },
  ]);

  const columns = [
    { field: 'reservationNo', headerName: 'Reservation No', width: 150 },
    { field: 'sku', headerName: 'SKU', width: 120 },
    { field: 'productName', headerName: 'Product Name', width: 180 },
    { field: 'quantity', headerName: 'Quantity', width: 100 },
    { field: 'warehouse', headerName: 'Warehouse', width: 130 },
    { field: 'reservedFor', headerName: 'Reserved For', width: 150 },
    { field: 'reservedDate', headerName: 'Date', width: 120 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <Chip label={params.value} color="warning" size="small" icon={<Lock />} />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <Button size="small" startIcon={<Visibility />}>
          View
        </Button>
      ),
    },
  ];

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Stock Reservation
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Reserve specific items (UIDs) for orders or other purposes
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Create New Reservation
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="SKU" placeholder="Enter SKU" />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="Quantity" type="number" placeholder="Enter Quantity" />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Warehouse</InputLabel>
              <Select label="Warehouse">
                <MenuItem value="Warehouse A">Warehouse A</MenuItem>
                <MenuItem value="Warehouse B">Warehouse B</MenuItem>
                <MenuItem value="Warehouse C">Warehouse C</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="Reserved For" placeholder="Order Batch/Purpose" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" startIcon={<Save />}>
              Reserve Stock
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ height: 500 }}>
        <DataGrid
          rows={reservations}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Paper>
    </Box>
  );
}
