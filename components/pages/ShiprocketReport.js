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
import { Upload, Download, Sync } from '@mui/icons-material';

export default function ShiprocketReport() {
  const [shipments, setShipments] = useState([
    {
      id: 1,
      awbNumber: 'SR123456789',
      orderNo: 'ORD-2024-001',
      shipmentDate: '2024-01-10',
      courierName: 'BlueDart',
      destination: 'Mumbai',
      weight: 2.5,
      freight: 150,
      status: 'In Transit',
    },
    {
      id: 2,
      awbNumber: 'SR987654321',
      orderNo: 'ORD-2024-002',
      shipmentDate: '2024-01-11',
      courierName: 'Delhivery',
      destination: 'Delhi',
      weight: 3.0,
      freight: 180,
      status: 'Delivered',
    },
  ]);

  const columns = [
    { field: 'awbNumber', headerName: 'AWB Number', width: 150 },
    { field: 'orderNo', headerName: 'Order No', width: 150 },
    { field: 'shipmentDate', headerName: 'Date', width: 120 },
    { field: 'courierName', headerName: 'Courier', width: 130 },
    { field: 'destination', headerName: 'Destination', width: 130 },
    { field: 'weight', headerName: 'Weight (kg)', width: 110 },
    { field: 'freight', headerName: 'Freight (₹)', width: 110 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
      renderCell: (params) => (
        <Chip
          label={params.value}
          size="small"
          color={params.value === 'Delivered' ? 'success' : params.value === 'In Transit' ? 'info' : 'warning'}
        />
      ),
    },
  ];

  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight={600}>
          Shiprocket Shipment Report
        </Typography>
        <Button variant="contained" startIcon={<Sync />} color="success">
          Sync with Shiprocket
        </Button>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Button fullWidth variant="outlined" component="label" startIcon={<Upload />}>
              Upload Shiprocket Data
              <input type="file" hidden accept=".xlsx,.xls" />
            </Button>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="From Date" type="date" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="To Date" type="date" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Status</InputLabel>
              <Select label="Status">
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="in-transit">In Transit</MenuItem>
                <MenuItem value="delivered">Delivered</MenuItem>
                <MenuItem value="rto">RTO</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      <Paper>
        <Box sx={{ p: 2, display: 'flex', gap: 2 }}>
          <Paper sx={{ p: 2, flex: 1, bgcolor: 'primary.light' }}>
            <Typography variant="subtitle2" color="primary.dark">
              Total Shipments
            </Typography>
            <Typography variant="h4" fontWeight={700} color="primary.dark">
              156
            </Typography>
          </Paper>
          <Paper sx={{ p: 2, flex: 1, bgcolor: 'success.light' }}>
            <Typography variant="subtitle2" color="success.dark">
              Delivered
            </Typography>
            <Typography variant="h4" fontWeight={700} color="success.dark">
              142
            </Typography>
          </Paper>
          <Paper sx={{ p: 2, flex: 1, bgcolor: 'info.light' }}>
            <Typography variant="subtitle2" color="info.dark">
              In Transit
            </Typography>
            <Typography variant="h4" fontWeight={700} color="info.dark">
              12
            </Typography>
          </Paper>
          <Paper sx={{ p: 2, flex: 1, bgcolor: 'error.light' }}>
            <Typography variant="subtitle2" color="error.dark">
              RTO
            </Typography>
            <Typography variant="h4" fontWeight={700} color="error.dark">
              2
            </Typography>
          </Paper>
        </Box>
      </Paper>

      <Paper sx={{ height: 500, mt: 3 }}>
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
