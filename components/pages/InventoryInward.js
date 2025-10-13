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
} from '@mui/material';
import { Save, QrCode, Add } from '@mui/icons-material';

export default function InventoryInward() {
  const [items, setItems] = useState([
    {
      uid: 'UID-2024-001',
      sku: 'AF-001',
      productName: 'Car Floor Mat',
      quantity: 50,
      warehouse: 'Warehouse A',
      rack: 'Rack-01',
    },
  ]);

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Inventory Inward (Warehouse)
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Log physical receipt of items into warehouse locations
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Inward Entry
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Scan/Enter UID" placeholder="Scan QR Code" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="SKU" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Quantity" type="number" />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Warehouse</InputLabel>
              <Select label="Warehouse">
                <MenuItem value="Warehouse A">Warehouse A</MenuItem>
                <MenuItem value="Warehouse B">Warehouse B</MenuItem>
                <MenuItem value="Warehouse C">Warehouse C</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Rack</InputLabel>
              <Select label="Rack">
                <MenuItem value="Rack-01">Rack-01</MenuItem>
                <MenuItem value="Rack-02">Rack-02</MenuItem>
                <MenuItem value="Rack-03">Rack-03</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button fullWidth variant="contained" startIcon={<Add />} sx={{ height: '56px' }}>
              Add Item
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Items to Inward
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>UID</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Warehouse</TableCell>
                <TableCell>Rack</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Chip icon={<QrCode />} label={item.uid} size="small" />
                  </TableCell>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.warehouse}</TableCell>
                  <TableCell>{item.rack}</TableCell>
                  <TableCell>
                    <Button size="small" color="error">
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" size="large" startIcon={<Save />}>
            Save Inward Entry
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
