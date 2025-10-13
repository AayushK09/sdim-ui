'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  Grid,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Upload, Download, CheckCircle } from '@mui/icons-material';

export default function UploadSale({ channel = 'Amazon' }) {
  const [orders, setOrders] = useState([
    {
      orderNo: 'AMZ-2024-001',
      orderDate: '2024-01-10',
      sku: 'AF-001',
      productName: 'Car Floor Mat',
      quantity: 2,
      amount: 3998,
      buyerName: 'John Customer',
      city: 'Mumbai',
      status: 'Pending',
    },
  ]);

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Upload Sale - {channel}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Import sales orders from {channel} via Excel upload
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Upload Orders
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Button fullWidth variant="outlined" startIcon={<Download />}>
              Download Excel Template
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button fullWidth variant="contained" component="label" startIcon={<Upload />}>
              Upload Excel File
              <input type="file" hidden accept=".xlsx,.xls" />
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Order Status</InputLabel>
              <Select label="Order Status" defaultValue="all">
                <MenuItem value="all">All Orders</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="processed">Processed</MenuItem>
                <MenuItem value="shipped">Shipped</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Uploaded Orders</Typography>
          <Button variant="contained" startIcon={<CheckCircle />}>
            Process Selected
          </Button>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order No</TableCell>
                <TableCell>Order Date</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Buyer</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{order.orderNo}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>{order.sku}</TableCell>
                  <TableCell>{order.productName}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>₹{order.amount}</TableCell>
                  <TableCell>{order.buyerName}</TableCell>
                  <TableCell>{order.city}</TableCell>
                  <TableCell>
                    <Chip
                      label={order.status}
                      color={order.status === 'Pending' ? 'warning' : 'success'}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
