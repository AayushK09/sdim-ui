'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Alert,
} from '@mui/material';
import { Search, Print, RestartAlt } from '@mui/icons-material';

export default function RegenerateSticker() {
  const [searchUID, setSearchUID] = useState('');
  const [foundSticker, setFoundSticker] = useState(null);

  const handleSearch = () => {
    // Mock search result
    setFoundSticker({
      uid: 'UID-2024-12345',
      sku: 'AF-001',
      productName: 'Car Floor Mat',
      originalDate: '2024-01-10',
      reason: 'Damaged',
      status: 'Active',
    });
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Regenerate Sticker
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Search and regenerate damaged or lost stickers
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Search Sticker
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Enter UID or SKU"
              placeholder="UID-2024-xxxxx"
              value={searchUID}
              onChange={(e) => setSearchUID(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Button fullWidth variant="contained" startIcon={<Search />} onClick={handleSearch} sx={{ height: '56px' }}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {foundSticker && (
        <Paper sx={{ p: 3 }}>
          <Alert severity="info" sx={{ mb: 3 }}>
            Sticker found! You can regenerate this sticker.
          </Alert>
          <Typography variant="h6" gutterBottom>
            Sticker Details
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>UID</TableCell>
                  <TableCell>SKU</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Original Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Chip label={foundSticker.uid} color="primary" size="small" />
                  </TableCell>
                  <TableCell>{foundSticker.sku}</TableCell>
                  <TableCell>{foundSticker.productName}</TableCell>
                  <TableCell>{foundSticker.originalDate}</TableCell>
                  <TableCell>
                    <Chip label={foundSticker.status} color="success" size="small" />
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" startIcon={<RestartAlt />} size="small" sx={{ mr: 1 }}>
                      Regenerate
                    </Button>
                    <Button variant="outlined" startIcon={<Print />} size="small">
                      Print
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              Reason for Regeneration:
            </Typography>
            <TextField fullWidth multiline rows={3} placeholder="Enter reason for regeneration..." />
          </Box>
        </Paper>
      )}
    </Box>
  );
}
