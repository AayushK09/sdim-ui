'use client';

import { useState } from 'react';
import { Box, Button, TextField, Paper, Typography, Grid, Chip, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Download, Print, Visibility } from '@mui/icons-material';

export default function InvoiceDetails() {
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      invoiceNo: 'INV-2024-001',
      invoiceDate: '2024-01-10',
      orderNo: 'ORD-2024-123',
      buyerName: 'John Customer',
      totalAmount: 4718,
      gstAmount: 718,
      status: 'Paid',
    },
    {
      id: 2,
      invoiceNo: 'INV-2024-002',
      invoiceDate: '2024-01-11',
      orderNo: 'ORD-2024-124',
      buyerName: 'Jane Buyer',
      totalAmount: 5550,
      gstAmount: 850,
      status: 'Pending',
    },
  ]);

  const columns = [
    { field: 'invoiceNo', headerName: 'Invoice No', width: 150 },
    { field: 'invoiceDate', headerName: 'Invoice Date', width: 130 },
    { field: 'orderNo', headerName: 'Order No', width: 150 },
    { field: 'buyerName', headerName: 'Buyer Name', width: 180 },
    { field: 'totalAmount', headerName: 'Total Amount', width: 130, renderCell: (params) => `₹${params.value}` },
    { field: 'gstAmount', headerName: 'GST Amount', width: 120, renderCell: (params) => `₹${params.value}` },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === 'Paid' ? 'success' : 'warning'}
          size="small"
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Box>
          <Button size="small" startIcon={<Visibility />}>
            View
          </Button>
          <Button size="small" startIcon={<Print />}>
            Print
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight={600}>
          Invoice Details Report
        </Typography>
        <Button variant="outlined" startIcon={<Download />}>
          Export to Excel
        </Button>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="Invoice No" size="small" />
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
                <MenuItem value="paid">Paid</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ height: 600 }}>
        <DataGrid
          rows={invoices}
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
