'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Alert,
} from '@mui/material';
import { QrCode2, Download, Search, Print } from '@mui/icons-material';

export default function ScanQR() {
  const [searchUID, setSearchUID] = useState('');
  const [itemDetails, setItemDetails] = useState(null);

  const handleSearch = () => {
    setItemDetails({
      uid: 'UID-2024-12345',
      sku: 'AF-001',
      productName: 'Car Floor Mat',
      warehouse: 'Warehouse A',
      rack: 'Rack-01',
      currentStock: 50,
      reservedStock: 10,
      availableStock: 40,
      lastInDate: '2024-01-10',
      lastOutDate: '2024-01-15',
    });
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        UID Lookup & QR Code Generation
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Lookup item locations via UID and generate QR codes
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Search /> Lookup UID
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Enter UID or Scan QR"
                  placeholder="UID-2024-xxxxx"
                  value={searchUID}
                  onChange={(e) => setSearchUID(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" startIcon={<Search />} onClick={handleSearch}>
                  Search
                </Button>
              </Grid>
            </Grid>

            {itemDetails && (
              <Box sx={{ mt: 3 }}>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  Item Details
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="caption" color="text.secondary">
                      UID
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {itemDetails.uid}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption" color="text.secondary">
                      SKU
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {itemDetails.sku}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption" color="text.secondary">
                      Product Name
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {itemDetails.productName}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption" color="text.secondary">
                      Warehouse
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {itemDetails.warehouse}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption" color="text.secondary">
                      Rack
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {itemDetails.rack}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <QrCode2 /> Generate QR Code
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Warehouse" select>
                  <option value="A">Warehouse A</option>
                  <option value="B">Warehouse B</option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Rack" select>
                  <option value="01">Rack-01</option>
                  <option value="02">Rack-02</option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" startIcon={<QrCode2 />}>
                  Generate QR Code
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="outlined" startIcon={<Download />}>
                  Download QR Codes
                </Button>
              </Grid>
            </Grid>

            <Alert severity="info" sx={{ mt: 3 }}>
              QR codes will be generated for the selected warehouse and rack location.
            </Alert>
          </Paper>
        </Grid>
      </Grid>

      {itemDetails && (
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  Current Stock
                </Typography>
                <Typography variant="h4" color="primary" fontWeight={700}>
                  {itemDetails.currentStock}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  Reserved Stock
                </Typography>
                <Typography variant="h4" color="warning.main" fontWeight={700}>
                  {itemDetails.reservedStock}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  Available Stock
                </Typography>
                <Typography variant="h4" color="success.main" fontWeight={700}>
                  {itemDetails.availableStock}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
