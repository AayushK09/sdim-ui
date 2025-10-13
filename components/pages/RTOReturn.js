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
  Divider,
} from '@mui/material';
import { Save, Search, LocalShipping } from '@mui/icons-material';

export default function RTOReturn() {
  const [rtoEntries, setRtoEntries] = useState([
    {
      id: 1,
      orderNo: 'AMZ-2024-001',
      receivedDate: '2024-01-15',
      courierName: 'BlueDart',
      awbNo: 'BD123456789',
      condition: 'Good',
      rtoReason: 'Customer Refused',
    },
  ]);

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Manual RTO (Return to Origin) Processing
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Process customer returns and log RTO items back into stock
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocalShipping /> RTO Entry
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Received Date" type="date" InputLabelProps={{ shrink: true }} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Order Number" placeholder="AMZ-2024-xxxxx" />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Third Party Name</InputLabel>
                  <Select label="Third Party Name">
                    <MenuItem value="Amazon">Amazon</MenuItem>
                    <MenuItem value="Flipkart">Flipkart</MenuItem>
                    <MenuItem value="Zepto">Zepto</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Courier Name</InputLabel>
                  <Select label="Courier Name">
                    <MenuItem value="BlueDart">BlueDart</MenuItem>
                    <MenuItem value="Delhivery">Delhivery</MenuItem>
                    <MenuItem value="DTDC">DTDC</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Airway Bill No" placeholder="AWB Number" />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>RTO Reason</InputLabel>
                  <Select label="RTO Reason">
                    <MenuItem value="Customer Refused">Customer Refused</MenuItem>
                    <MenuItem value="Wrong Address">Wrong Address</MenuItem>
                    <MenuItem value="Customer Not Available">Customer Not Available</MenuItem>
                    <MenuItem value="Damaged Product">Damaged Product</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Condition</InputLabel>
                  <Select label="Condition">
                    <MenuItem value="Good">Good</MenuItem>
                    <MenuItem value="Damaged">Damaged</MenuItem>
                    <MenuItem value="Broken">Broken</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="UID" placeholder="Scan or Enter UID" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Remarks" multiline rows={2} />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" size="large" startIcon={<Save />}>
                  Save RTO Entry
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Search RTO Records
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} md={8}>
                <TextField fullWidth label="Search by Order No or AWB" size="small" />
              </Grid>
              <Grid item xs={12} md={4}>
                <Button fullWidth variant="contained" startIcon={<Search />} sx={{ height: '40px' }}>
                  Search
                </Button>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle2" gutterBottom>
              Recent RTO Entries
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Order No</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Courier</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rtoEntries.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell>{entry.orderNo}</TableCell>
                      <TableCell>{entry.receivedDate}</TableCell>
                      <TableCell>{entry.courierName}</TableCell>
                      <TableCell>
                        <Chip label={entry.condition} size="small" color="success" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
