'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  Grid,
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
  Alert,
} from '@mui/material';
import { QrCode, Print, DirectionsCar } from '@mui/icons-material';

export default function CarSticker() {
  const [factoryStickers, setFactoryStickers] = useState([
    {
      uid: 'FACTORY-2024-001',
      carModel: 'Maruti Swift 2023',
      partName: 'Floor Mat Set',
      batchNo: 'BATCH-2024-A1',
      quantity: 100,
      factoryLocation: 'Factory Unit 1',
      generatedDate: '2024-01-10',
    },
  ]);

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <DirectionsCar /> Sticker Generation (Factory Level)
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Generate stickers for factory-level production tracking
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        <strong>Factory Level Stickers:</strong> These stickers are used for tracking products at the manufacturing/factory stage before they reach finished goods inventory.
      </Alert>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Factory Sticker Generation
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Factory Location</InputLabel>
              <Select label="Factory Location">
                <MenuItem value="unit1">Factory Unit 1</MenuItem>
                <MenuItem value="unit2">Factory Unit 2</MenuItem>
                <MenuItem value="unit3">Factory Unit 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Car Model</InputLabel>
              <Select label="Car Model">
                <MenuItem value="swift">Maruti Swift</MenuItem>
                <MenuItem value="baleno">Maruti Baleno</MenuItem>
                <MenuItem value="dzire">Maruti Dzire</MenuItem>
                <MenuItem value="alto">Maruti Alto</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="Part Name" placeholder="Enter part name" />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="Batch Number" placeholder="BATCH-2024-xxx" />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="Quantity" type="number" placeholder="Enter quantity" />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="Production Date" type="date" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>QC Status</InputLabel>
              <Select label="QC Status">
                <MenuItem value="passed">QC Passed</MenuItem>
                <MenuItem value="pending">QC Pending</MenuItem>
                <MenuItem value="failed">QC Failed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button fullWidth variant="contained" startIcon={<QrCode />} sx={{ height: '56px' }}>
              Generate Stickers
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Factory Stickers Generated</Typography>
          <Button variant="outlined" startIcon={<Print />}>
            Print Batch
          </Button>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>UID</TableCell>
                <TableCell>Car Model</TableCell>
                <TableCell>Part Name</TableCell>
                <TableCell>Batch No</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Factory</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {factoryStickers.map((sticker, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Chip icon={<QrCode />} label={sticker.uid} size="small" color="primary" />
                  </TableCell>
                  <TableCell>{sticker.carModel}</TableCell>
                  <TableCell>{sticker.partName}</TableCell>
                  <TableCell>
                    <Chip label={sticker.batchNo} size="small" variant="outlined" />
                  </TableCell>
                  <TableCell>{sticker.quantity}</TableCell>
                  <TableCell>{sticker.factoryLocation}</TableCell>
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
