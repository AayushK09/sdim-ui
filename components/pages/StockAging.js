'use client';

import { useState } from 'react';
import { Box, Paper, Typography, Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Warning, Error as ErrorIcon } from '@mui/icons-material';

export default function StockAging() {
  const [stocks, setStocks] = useState([
    {
      id: 1,
      sku: 'AF-001',
      productName: 'Car Floor Mat',
      warehouse: 'Warehouse A',
      rack: 'Rack-01',
      currentStock: 150,
      agingDays: 45,
      lastOutDate: '2024-11-25',
    },
    {
      id: 2,
      sku: 'AF-002',
      productName: 'Seat Cover Set',
      warehouse: 'Warehouse B',
      rack: 'Rack-05',
      currentStock: 80,
      agingDays: 120,
      lastOutDate: '2024-08-10',
    },
  ]);

  const columns = [
    { field: 'sku', headerName: 'SKU', width: 120 },
    { field: 'productName', headerName: 'Product Name', width: 200 },
    { field: 'warehouse', headerName: 'Warehouse', width: 150 },
    { field: 'rack', headerName: 'Rack', width: 100 },
    { field: 'currentStock', headerName: 'Current Stock', width: 130 },
    {
      field: 'agingDays',
      headerName: 'Aging (Days)',
      width: 130,
      renderCell: (params) => (
        <Chip
          label={`${params.value} days`}
          icon={params.value > 90 ? <ErrorIcon /> : params.value > 60 ? <Warning /> : null}
          color={params.value > 90 ? 'error' : params.value > 60 ? 'warning' : 'default'}
          size="small"
        />
      ),
    },
    { field: 'lastOutDate', headerName: 'Last Out Date', width: 130 },
  ];

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Inventory Stock & Aging Details
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Monitor stock levels and identify slow-moving inventory
      </Typography>

      <Paper sx={{ height: 600 }}>
        <DataGrid
          rows={stocks}
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
