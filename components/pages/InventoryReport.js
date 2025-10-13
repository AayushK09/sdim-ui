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
import { Download, TrendingUp, TrendingDown } from '@mui/icons-material';

export default function InventoryReport() {
  const [movements, setMovements] = useState([
    {
      id: 1,
      date: '2024-01-10',
      sku: 'AF-001',
      productName: 'Car Floor Mat',
      movementType: 'IN',
      quantity: 100,
      warehouse: 'Warehouse A',
      reference: 'PO-2024-001',
      remarks: 'New Stock',
    },
    {
      id: 2,
      date: '2024-01-11',
      sku: 'AF-001',
      productName: 'Car Floor Mat',
      movementType: 'OUT',
      quantity: 50,
      warehouse: 'Warehouse A',
      reference: 'ORD-2024-123',
      remarks: 'Order Fulfillment',
    },
    {
      id: 3,
      date: '2024-01-12',
      sku: 'AF-002',
      productName: 'Seat Cover Set',
      movementType: 'IN',
      quantity: 80,
      warehouse: 'Warehouse B',
      reference: 'PO-2024-002',
      remarks: 'New Stock',
    },
  ]);

  const columns = [
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'sku', headerName: 'SKU', width: 120 },
    { field: 'productName', headerName: 'Product Name', width: 180 },
    {
      field: 'movementType',
      headerName: 'Type',
      width: 100,
      renderCell: (params) => (
        <Chip
          label={params.value}
          size="small"
          color={params.value === 'IN' ? 'success' : 'error'}
          icon={params.value === 'IN' ? <TrendingUp /> : <TrendingDown />}
        />
      ),
    },
    { field: 'quantity', headerName: 'Quantity', width: 100 },
    { field: 'warehouse', headerName: 'Warehouse', width: 130 },
    { field: 'reference', headerName: 'Reference', width: 130 },
    { field: 'remarks', headerName: 'Remarks', width: 150 },
  ];

  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight={600}>
          Inventory Movement Report (In/Out)
        </Typography>
        <Button variant="outlined" startIcon={<Download />}>
          Export Report
        </Button>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="From Date" type="date" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="To Date" type="date" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Movement Type</InputLabel>
              <Select label="Movement Type">
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="IN">IN</MenuItem>
                <MenuItem value="OUT">OUT</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth size="small">
              <InputLabel>Warehouse</InputLabel>
              <Select label="Warehouse">
                <MenuItem value="all">All Warehouses</MenuItem>
                <MenuItem value="A">Warehouse A</MenuItem>
                <MenuItem value="B">Warehouse B</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      <Paper>
        <Box sx={{ p: 2, display: 'flex', gap: 2 }}>
          <Paper sx={{ p: 2, flex: 1, bgcolor: 'success.light' }}>
            <Typography variant="subtitle2" color="success.dark">
              Total IN
            </Typography>
            <Typography variant="h4" fontWeight={700} color="success.dark">
              180
            </Typography>
          </Paper>
          <Paper sx={{ p: 2, flex: 1, bgcolor: 'error.light' }}>
            <Typography variant="subtitle2" color="error.dark">
              Total OUT
            </Typography>
            <Typography variant="h4" fontWeight={700} color="error.dark">
              50
            </Typography>
          </Paper>
          <Paper sx={{ p: 2, flex: 1, bgcolor: 'primary.light' }}>
            <Typography variant="subtitle2" color="primary.dark">
              Net Movement
            </Typography>
            <Typography variant="h4" fontWeight={700} color="primary.dark">
              +130
            </Typography>
          </Paper>
        </Box>
      </Paper>

      <Paper sx={{ height: 500, mt: 3 }}>
        <DataGrid
          rows={movements}
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
