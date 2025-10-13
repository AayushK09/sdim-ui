'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  Grid,
  IconButton,
  Chip,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, Edit, Delete, SubdirectoryArrowRight } from '@mui/icons-material';

export default function CreateSubMenu() {
  const [submenus, setSubmenus] = useState([
    {
      id: 1,
      submenuName: 'Product Master',
      parentMenu: 'Catalog',
      submenuURL: '/catalog/products',
      displayOrder: 1,
      isActive: true,
    },
    {
      id: 2,
      submenuName: 'Vendor Management',
      parentMenu: 'Catalog',
      submenuURL: '/catalog/vendors',
      displayOrder: 2,
      isActive: true,
    },
    {
      id: 3,
      submenuName: 'Inventory Inward',
      parentMenu: 'Inventory',
      submenuURL: '/inventory/inward',
      displayOrder: 1,
      isActive: true,
    },
  ]);

  const columns = [
    { field: 'submenuName', headerName: 'SubMenu Name', width: 200 },
    { field: 'parentMenu', headerName: 'Parent Menu', width: 150 },
    { field: 'submenuURL', headerName: 'SubMenu URL', width: 250 },
    { field: 'displayOrder', headerName: 'Display Order', width: 130 },
    {
      field: 'isActive',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => (
        <Chip label={params.value ? 'Active' : 'Inactive'} color={params.value ? 'success' : 'default'} size="small" />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <Box>
          <IconButton size="small" color="primary">
            <Edit fontSize="small" />
          </IconButton>
          <IconButton size="small" color="error">
            <Delete fontSize="small" />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight={600}>
          Sub-Menu Management
        </Typography>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SubdirectoryArrowRight /> Create New SubMenu
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Parent Menu</InputLabel>
              <Select label="Parent Menu">
                <MenuItem value="Dashboard">Dashboard</MenuItem>
                <MenuItem value="Catalog">Catalog</MenuItem>
                <MenuItem value="Inventory">Inventory</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="SubMenu Name" placeholder="Enter submenu name" />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField fullWidth label="SubMenu URL" placeholder="/menu/submenu" />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField fullWidth label="Display Order" type="number" defaultValue={1} />
          </Grid>
          <Grid item xs={12} md={1}>
            <Button fullWidth variant="contained" startIcon={<Add />} sx={{ height: '56px' }}>
              Add
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ height: 500 }}>
        <DataGrid rows={submenus} columns={columns} pageSize={10} rowsPerPageOptions={[10, 25, 50]} disableSelectionOnClick />
      </Paper>
    </Box>
  );
}
