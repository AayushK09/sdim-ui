'use client';

import { useState } from 'react';
import { Box, Button, TextField, Paper, Typography, Grid, Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Upload, Download, CheckCircle } from '@mui/icons-material';

export default function AmazonPayment() {
  const [payments, setPayments] = useState([
    {
      id: 1,
      orderNo: 'AMZ-2024-001',
      orderDate: '2024-01-10',
      orderAmount: 3998,
      paymentDate: '2024-01-15',
      paymentAmount: 3398,
      commission: 400,
      tds: 200,
      status: 'Reconciled',
    },
    {
      id: 2,
      orderNo: 'AMZ-2024-002',
      orderDate: '2024-01-11',
      orderAmount: 4500,
      paymentDate: null,
      paymentAmount: 0,
      commission: 0,
      tds: 0,
      status: 'Pending',
    },
  ]);

  const columns = [
    { field: 'orderNo', headerName: 'Order No', width: 150 },
    { field: 'orderDate', headerName: 'Order Date', width: 120 },
    { field: 'orderAmount', headerName: 'Order Amount', width: 130, renderCell: (params) => `₹${params.value}` },
    { field: 'paymentDate', headerName: 'Payment Date', width: 130 },
    { field: 'paymentAmount', headerName: 'Payment Received', width: 150, renderCell: (params) => `₹${params.value}` },
    { field: 'commission', headerName: 'Commission', width: 120, renderCell: (params) => `₹${params.value}` },
    { field: 'tds', headerName: 'TDS', width: 100, renderCell: (params) => `₹${params.value}` },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === 'Reconciled' ? 'success' : 'warning'}
          size="small"
        />
      ),
    },
  ];

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Amazon Payment Reconciliation
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Reconcile payments received against orders dispatched
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Button fullWidth variant="outlined" startIcon={<Download />}>
              Download Excel Template
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button fullWidth variant="contained" component="label" startIcon={<Upload />}>
              Upload Payment Report
              <input type="file" hidden accept=".xlsx,.xls" />
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button fullWidth variant="contained" color="success" startIcon={<CheckCircle />}>
              Reconcile Payments
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ height: 600 }}>
        <DataGrid
          rows={payments}
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
