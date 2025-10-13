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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Checkbox,
} from '@mui/material';
import { Save, Print, Download, ListAlt } from '@mui/icons-material';

export default function CreatePicklist() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNo: 'ORD-2024-001',
      sku: 'AF-001',
      productName: 'Car Floor Mat',
      quantity: 2,
      warehouse: 'Warehouse A',
      rack: 'Rack-01',
      selected: false,
    },
    {
      id: 2,
      orderNo: 'ORD-2024-002',
      sku: 'AF-002',
      productName: 'Seat Cover Set',
      quantity: 1,
      warehouse: 'Warehouse A',
      rack: 'Rack-02',
      selected: false,
    },
  ]);

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Create Picklist
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Generate picklists for order fulfillment
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ListAlt /> Picklist Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="Picklist Number" placeholder="Auto-generated" disabled />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="Picklist Date" type="date" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Warehouse</InputLabel>
              <Select label="Warehouse">
                <MenuItem value="all">All Warehouses</MenuItem>
                <MenuItem value="A">Warehouse A</MenuItem>
                <MenuItem value="B">Warehouse B</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Order Type</InputLabel>
              <Select label="Order Type">
                <MenuItem value="all">All Orders</MenuItem>
                <MenuItem value="amazon">Amazon</MenuItem>
                <MenuItem value="autofurnish">AutoFurnish</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 3, mb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Pending Orders</Typography>
          <Box>
            <Button variant="outlined" startIcon={<Download />} sx={{ mr: 1 }}>
              Export
            </Button>
            <Button variant="contained" startIcon={<Save />}>
              Generate Picklist
            </Button>
          </Box>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>Order No</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Warehouse</TableCell>
                <TableCell>Rack</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} hover>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>{order.orderNo}</TableCell>
                  <TableCell>{order.sku}</TableCell>
                  <TableCell>{order.productName}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>{order.warehouse}</TableCell>
                  <TableCell>
                    <Chip label={order.rack} size="small" variant="outlined" />
                  </TableCell>
                  <TableCell>
                    <Chip label="Pending" size="small" color="warning" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Paper sx={{ p: 2, bgcolor: 'info.light' }}>
        <Typography variant="body2" color="info.dark">
          <strong>Note:</strong> Select orders to include in the picklist. The system will automatically group by warehouse and rack location.
        </Typography>
      </Paper>
    </Box>
  );
}
