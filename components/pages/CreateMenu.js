'use client';

import { useState } from 'react';
import { Box, Button, TextField, Paper, Typography, Grid, IconButton, Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Add, Edit, Delete, Menu as MenuIcon } from '@mui/icons-material';

export default function CreateMenu() {
  const [menus, setMenus] = useState([
    { id: 1, menuName: 'Dashboard', menuURL: '/dashboard', displayOrder: 1, isActive: true },
    { id: 2, menuName: 'Catalog', menuURL: '/catalog', displayOrder: 2, isActive: true },
    { id: 3, menuName: 'Inventory', menuURL: '/inventory', displayOrder: 3, isActive: true },
  ]);

  const columns = [
    { field: 'menuName', headerName: 'Menu Name', width: 200 },
    { field: 'menuURL', headerName: 'Menu URL', width: 250 },
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
          Main Menu Management
        </Typography>
      </Box>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Create New Menu
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Menu Name" placeholder="Enter menu name" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth label="Menu URL" placeholder="/menu-url" />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField fullWidth label="Display Order" type="number" defaultValue={1} />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button fullWidth variant="contained" startIcon={<Add />} sx={{ height: '56px' }}>
              Add Menu
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ height: 500 }}>
        <DataGrid rows={menus} columns={columns} pageSize={10} rowsPerPageOptions={[10, 25, 50]} disableSelectionOnClick />
      </Paper>
    </Box>
  );
}
