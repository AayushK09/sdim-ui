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

export default function GenerateSticker() {
  const [tabValue, setTabValue] = useState(0);
  const [generatedStickers, setGeneratedStickers] = useState([
    {
      uid: 'UID-2024-12345',
      sku: 'AF-001',
      productName: 'Car Floor Mat',
      quantity: 50,
      generatedDate: '2024-01-10',
    },
  ]);

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Sticker Generation (Finished Goods)
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Generate unique QR-coded stickers for finished goods
      </Typography>

      <Paper sx={{ mb: 3 }}>
        <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
          <Tab label="Manual Generation" />
          <Tab label="Bulk Upload" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {tabValue === 0 && (
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField fullWidth label="SKU" placeholder="Enter SKU" />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth label="Quantity" type="number" placeholder="Enter Quantity" />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel>Sticker Type</InputLabel>
                  <Select label="Sticker Type">
                    <MenuItem value="standard">Standard</MenuItem>
                    <MenuItem value="premium">Premium</MenuItem>
                    <MenuItem value="custom">Custom</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" startIcon={<QrCode />} size="large">
                  Generate Stickers
                </Button>
              </Grid>
            </Grid>
          )}

          {tabValue === 1 && (
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Button variant="outlined" startIcon={<Download />}>
                    Download Excel Template
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" component="label" startIcon={<Upload />}>
                    Upload Excel File
                    <input type="file" hidden accept=".xlsx,.xls" />
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Generated Stickers</Typography>
          <Button variant="outlined" startIcon={<Print />}>
            Print Selected
          </Button>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>UID</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Generated Date</TableCell>
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
                  <TableCell>{sticker.sku}</TableCell>
                  <TableCell>{sticker.productName}</TableCell>
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
