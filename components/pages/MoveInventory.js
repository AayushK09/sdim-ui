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
  Alert,
} from '@mui/material';
import { SwapHoriz, Add, Save } from '@mui/icons-material';

export default function MoveInventory() {
  const [transferItems, setTransferItems] = useState([
    {
      uid: 'UID-2024-001',
      sku: 'AF-001',
      productName: 'Car Floor Mat',
      quantity: 10,
      fromWarehouse: 'Warehouse A',
      toWarehouse: 'Warehouse B',
    },
  ]);

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Warehouse to Warehouse Inventory Transfer
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Move inventory between locations (within a warehouse or between warehouses)
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        <strong>Note:</strong> Inventory transfer will update stock levels in both source and destination warehouses.
      </Alert>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SwapHoriz /> Transfer Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>From Warehouse</InputLabel>
              <Select label="From Warehouse">
                <MenuItem value="Warehouse A">Warehouse A</MenuItem>
                <MenuItem value="Warehouse B">Warehouse B</MenuItem>
                <MenuItem value="Warehouse C">Warehouse C</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>To Warehouse</InputLabel>
              <Select label="To Warehouse">
                <MenuItem value="Warehouse A">Warehouse A</MenuItem>
                <MenuItem value="Warehouse B">Warehouse B</MenuItem>
                <MenuItem value="Warehouse C">Warehouse C</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Transfer Date" type="date" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="UID / SKU" placeholder="Scan or Enter" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Quantity" type="number" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button fullWidth variant="outlined" startIcon={<Add />} sx={{ height: '56px' }}>
              Add Item
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Transfer Remarks" multiline rows={2} />
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Items to Transfer
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>UID</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>From</TableCell>
                <TableCell>To</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transferItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Chip label={item.uid} size="small" color="primary" />
                  </TableCell>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>
                    <Chip label={item.fromWarehouse} size="small" variant="outlined" />
                  </TableCell>
                  <TableCell>
                    <Chip label={item.toWarehouse} size="small" variant="outlined" color="success" />
                  </TableCell>
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
            Complete Transfer
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
