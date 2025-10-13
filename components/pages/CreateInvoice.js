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
  Divider,
  IconButton,
} from '@mui/material';
import { Save, Add, Delete, Print } from '@mui/icons-material';

export default function CreateInvoice() {
  const [lineItems, setLineItems] = useState([
    { sku: 'AF-001', productName: 'Car Floor Mat', quantity: 2, rate: 1999, amount: 3998 },
  ]);

  const subtotal = lineItems.reduce((sum, item) => sum + item.amount, 0);
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight={600}>
          Create Invoice
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" startIcon={<Print />}>
            Print Preview
          </Button>
          <Button variant="contained" startIcon={<Save />}>
            Save Invoice
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Seller Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Select Seller</InputLabel>
                  <Select label="Select Seller">
                    <MenuItem value="AutoFurnish">AutoFurnish India Pvt Ltd</MenuItem>
                    <MenuItem value="AutoParts">AutoParts Solutions</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="GST Number" defaultValue="27AAAAA0000A1Z5" disabled />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Address" multiline rows={2} disabled />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Buyer Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Select Buyer</InputLabel>
                  <Select label="Select Buyer">
                    <MenuItem value="1">Customer 1</MenuItem>
                    <MenuItem value="2">Customer 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Buyer Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Shipping Address" multiline rows={2} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">Invoice Items</Typography>
              <Button variant="contained" size="small" startIcon={<Add />}>
                Add Item
              </Button>
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>SKU</TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Rate</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lineItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.sku}</TableCell>
                      <TableCell>{item.productName}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>₹{item.rate}</TableCell>
                      <TableCell>₹{item.amount}</TableCell>
                      <TableCell>
                        <IconButton size="small" color="error">
                          <Delete fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField fullWidth label="Transport" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="PO Number" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Total Summary
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Subtotal:</Typography>
              <Typography>₹{subtotal.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>GST (18%):</Typography>
              <Typography>₹{gst.toFixed(2)}</Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6" color="primary">
                ₹{total.toFixed(2)}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
