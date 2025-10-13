'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  Grid,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';
import { QrCode, Upload, Print, Download } from '@mui/icons-material';

export default function AmazonSticker() {
  const [tabValue, setTabValue] = useState(0);
  const [generatedStickers, setGeneratedStickers] = useState([
    {
      uid: 'AMZ-UID-2024-12345',
      asin: 'B08XYZ1234',
      sku: 'AF-AMZ-001',
      productName: 'Car Floor Mat for Maruti',
      fnsku: 'X001ABC123',
      quantity: 24,
      generatedDate: '2024-01-10',
    },
  ]);

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Amazon Sticker Generation
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Generate Amazon FBA stickers with FNSKU and barcodes
      </Typography>

      <Paper sx={{ mb: 3 }}>
        <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
          <Tab label="Manual Generation" />
          <Tab label="Bulk Upload" />
          <Tab label="Partner Integration" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {tabValue === 0 && (
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <TextField fullWidth label="ASIN" placeholder="Enter ASIN" />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField fullWidth label="SKU" placeholder="Enter SKU" />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField fullWidth label="FNSKU" placeholder="Enter FNSKU" />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField fullWidth label="Quantity" type="number" placeholder="Enter Quantity" />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel>Sticker Size</InputLabel>
                  <Select label="Sticker Size">
                    <MenuItem value="40x30">40mm x 30mm</MenuItem>
                    <MenuItem value="50x30">50mm x 30mm</MenuItem>
                    <MenuItem value="custom">Custom</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel>Include Barcode</InputLabel>
                  <Select label="Include Barcode" defaultValue="yes">
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button fullWidth variant="contained" startIcon={<QrCode />} sx={{ height: '56px' }}>
                  Generate Amazon Stickers
                </Button>
              </Grid>
            </Grid>
          )}

          {tabValue === 1 && (
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Button variant="outlined" startIcon={<Download />}>
                    Download Amazon Template
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" component="label" startIcon={<Upload />}>
                    Upload Excel File (ASIN, FNSKU, Qty)
                    <input type="file" hidden accept=".xlsx,.xls" />
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}

          {tabValue === 2 && (
            <Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Connect with Amazon Seller Central to automatically fetch order details and generate stickers.
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Amazon Seller ID" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="API Access Key" type="password" />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="success">
                    Connect to Amazon
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Generated Amazon Stickers</Typography>
          <Button variant="outlined" startIcon={<Print />}>
            Print Selected
          </Button>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>UID</TableCell>
                <TableCell>ASIN</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>FNSKU</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {generatedStickers.map((sticker, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Chip icon={<QrCode />} label={sticker.uid} size="small" color="primary" />
                  </TableCell>
                  <TableCell>{sticker.asin}</TableCell>
                  <TableCell>{sticker.sku}</TableCell>
                  <TableCell>{sticker.productName}</TableCell>
                  <TableCell>
                    <Chip label={sticker.fnsku} size="small" variant="outlined" />
                  </TableCell>
                  <TableCell>{sticker.quantity}</TableCell>
                  <TableCell>{sticker.generatedDate}</TableCell>
                  <TableCell>
                    <Chip label="Generated" color="success" size="small" />
                  </TableCell>
                  <TableCell>
                    <Button size="small" startIcon={<Print />}>
                      Print
                    </Button>
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
