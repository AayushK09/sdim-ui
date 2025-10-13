'use client';

import { useState } from 'react';
import { Box, Button, TextField, Paper, Typography, Grid, Chip, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { LocalShipping, Print, Download } from '@mui/icons-material';

export default function ShipmentManifest() {
  const [shipments, setShipments] = useState([
    {
      id: 1,
      manifestNo: 'MAN-2024-001',
      manifestDate: '2024-01-10',
      courierName: 'BlueDart',
      totalOrders: 25,
      totalWeight: 50,
      destination: 'Mumbai',
      status: 'Dispatched',
    },
    {
      id: 2,
      manifestNo: 'MAN-2024-002',
      manifestDate: '2024-01-11',
      courierName: 'Delhivery',
      totalOrders: 30,
      totalWeight: 60,
      destination: 'Delhi',
      status: 'Pending',
    },
  ]);

  const columns = [
    { field: 'manifestNo', headerName: 'Manifest No', width: 150 },
    { field: 'manifestDate', headerName: 'Date', width: 120 },
    { field: 'courierName', headerName: 'Courier', width: 130 },
    { field: 'totalOrders', headerName: 'Total Orders', width: 120 },
    { field: 'totalWeight', headerName: 'Weight (kg)', width: 120 },
    { field: 'destination', headerName: 'Destination', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === 'Dispatched' ? 'success' : 'warning'}
          size="small"
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Button size="small" startIcon={<Print />}>
          Print
        </Button>
      ),
    },
  ];

  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight={600}>
          Generate Shipment Manifest
        </Typography>
        <Button variant="contained" startIcon={<LocalShipping />}>
          Create New Manifest
        </Button>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Courier Partner</InputLabel>
              <Select label="Courier Partner">
                <MenuItem value="bluedart">BlueDart</MenuItem>
                <MenuItem value="delhivery">Delhivery</MenuItem>
                <MenuItem value="dtdc">DTDC</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="From Date" type="date" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="To Date" type="date" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Button fullWidth variant="outlined" startIcon={<Download />} sx={{ height: '40px' }}>
              Export
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ height: 600 }}>
        <DataGrid
          rows={shipments}
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
