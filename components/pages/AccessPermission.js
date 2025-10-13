'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Chip,
} from '@mui/material';
import { Save, Security } from '@mui/icons-material';

export default function AccessPermission() {
  const [permissions, setPermissions] = useState({
    Admin: {
      Dashboard: true,
      Catalog: true,
      Inventory: true,
      Finance: true,
      Payment: true,
      Shipment: true,
      Account: true,
    },
    'Store Manager': {
      Dashboard: true,
      Catalog: true,
      Inventory: true,
      Finance: false,
      Payment: false,
      Shipment: true,
      Account: false,
    },
    Finance: {
      Dashboard: true,
      Catalog: false,
      Inventory: false,
      Finance: true,
      Payment: true,
      Shipment: false,
      Account: false,
    },
  });

  const menus = ['Dashboard', 'Catalog', 'Inventory', 'Finance', 'Payment', 'Shipment', 'Account'];
  const roles = Object.keys(permissions);

  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h5" fontWeight={600}>
            Menu Access Permissions
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Assign menu access permissions to roles via matrix
          </Typography>
        </Box>
        <Button variant="contained" startIcon={<Save />}>
          Save Permissions
        </Button>
      </Box>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Security color="primary" />
          <Typography variant="h6">Permission Matrix</Typography>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, bgcolor: '#f5f5f5' }}>Menu</TableCell>
                {roles.map((role) => (
                  <TableCell key={role} align="center" sx={{ fontWeight: 600, bgcolor: '#f5f5f5' }}>
                    <Chip label={role} color="primary" variant="outlined" />
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {menus.map((menu) => (
                <TableRow key={menu} hover>
                  <TableCell sx={{ fontWeight: 500 }}>{menu}</TableCell>
                  {roles.map((role) => (
                    <TableCell key={`${menu}-${role}`} align="center">
                      <Checkbox
                        checked={permissions[role][menu]}
                        onChange={(e) => {
                          setPermissions({
                            ...permissions,
                            [role]: {
                              ...permissions[role],
                              [menu]: e.target.checked,
                            },
                          });
                        }}
                        color="primary"
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
