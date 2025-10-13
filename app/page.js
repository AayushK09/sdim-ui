'use client';

import { useState } from 'react';
import { 
  Box, 
  Drawer, 
  AppBar, 
  Toolbar, 
  Typography, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  IconButton,
  Collapse,
  Card,
  CardContent,
  Grid,
  Paper,
  Avatar,
  Chip,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Container
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Inventory as InventoryIcon,
  ShoppingCart as ShoppingCartIcon,
  AttachMoney as AttachMoneyIcon,
  LocalShipping as LocalShippingIcon,
  QrCode as QrCodeIcon,
  Category as CategoryIcon,
  AccountCircle as AccountCircleIcon,
  ExpandLess,
  ExpandMore,
  TrendingUp,
  TrendingDown,
  Warehouse,
  Receipt,
  People,
  LocalOffer,
  Assessment
} from '@mui/icons-material';

// Import page components
import ProductMaster from '@/components/pages/ProductMaster';
import VendorManagement from '@/components/pages/VendorManagement';
import VendorAddresses from '@/components/pages/VendorAddresses';
import InventoryInward from '@/components/pages/InventoryInward';
import CreateInvoice from '@/components/pages/CreateInvoice';
import GenerateSticker from '@/components/pages/GenerateSticker';
import AmazonSticker from '@/components/pages/AmazonSticker';
import CarSticker from '@/components/pages/CarSticker';
import RegenerateSticker from '@/components/pages/RegenerateSticker';
import UploadSale from '@/components/pages/UploadSale';
import UserAccount from '@/components/pages/UserAccount';
import StockAging from '@/components/pages/StockAging';
import InvoiceDetails from '@/components/pages/InvoiceDetails';
import AmazonPayment from '@/components/pages/AmazonPayment';
import ShipmentManifest from '@/components/pages/ShipmentManifest';
import ShiprocketReport from '@/components/pages/ShiprocketReport';
import CreateMenu from '@/components/pages/CreateMenu';
import CreateSubMenu from '@/components/pages/CreateSubMenu';
import AccessPermission from '@/components/pages/AccessPermission';
import RTOReturn from '@/components/pages/RTOReturn';
import InventoryReserve from '@/components/pages/InventoryReserve';
import MoveInventory from '@/components/pages/MoveInventory';
import InventoryReport from '@/components/pages/InventoryReport';
import CreatePicklist from '@/components/pages/CreatePicklist';
import ScanQR from '@/components/pages/ScanQR';

const drawerWidth = 280;

// Create MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

// Navigation menu structure
const menuItems = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    key: 'dashboard',
  },
  {
    title: 'Upload Sale',
    icon: <ShoppingCartIcon />,
    key: 'upload-sale',
    submenu: [
      { title: 'Amazon Sale', key: 'amazon-sale' },
      { title: 'Amazon Flex', key: 'amazon-flex' },
      { title: 'AutoFurnish Orders', key: 'af-orders' },
    ],
  },
  {
    title: 'Catalog',
    icon: <CategoryIcon />,
    key: 'catalog',
    submenu: [
      { title: 'Product Master', key: 'product-master' },
      { title: 'Vendor Management', key: 'vendor-management' },
      { title: 'Vendor Addresses', key: 'vendor-addresses' },
    ],
  },
  {
    title: 'Sticker',
    icon: <QrCodeIcon />,
    key: 'sticker',
    submenu: [
      { title: 'Amazon Sticker', key: 'amazon-sticker' },
      { title: 'Generate Sticker (FG)', key: 'generate-sticker-fg' },
      { title: 'Generate Car Sticker', key: 'generate-car-sticker' },
      { title: 'Regenerate Sticker', key: 'regenerate-sticker' },
    ],
  },
  {
    title: 'Inventory',
    icon: <InventoryIcon />,
    key: 'inventory',
    submenu: [
      { title: 'Inventory Inward', key: 'inventory-inward' },
      { title: 'Inventory Reserve', key: 'inventory-reserve' },
      { title: 'RTO Return', key: 'rto-return' },
      { title: 'Move Inventory', key: 'move-inventory' },
      { title: 'Stock & Aging', key: 'stock-aging' },
      { title: 'Inventory IN/OUT Report', key: 'inventory-report' },
      { title: 'Create Picklist', key: 'create-picklist' },
      { title: 'Scan QR/Download UID', key: 'scan-qr' },
    ],
  },
  {
    title: 'Finance',
    icon: <AttachMoneyIcon />,
    key: 'finance',
    submenu: [
      { title: 'Create Invoice', key: 'create-invoice' },
      { title: 'Invoice Details', key: 'invoice-details' },
    ],
  },
  {
    title: 'Payment',
    icon: <Receipt />,
    key: 'payment',
    submenu: [
      { title: 'Amazon Payment', key: 'amazon-payment' },
    ],
  },
  {
    title: 'Shipment',
    icon: <LocalShippingIcon />,
    key: 'shipment',
    submenu: [
      { title: 'Shipment Manifest', key: 'shipment-manifest' },
      { title: 'Shiprocket Report', key: 'shiprocket-report' },
    ],
  },
  {
    title: 'Account',
    icon: <AccountCircleIcon />,
    key: 'account',
    submenu: [
      { title: 'User Account', key: 'user-account' },
      { title: 'Create Menu', key: 'create-menu' },
      { title: 'Create SubMenu', key: 'create-submenu' },
      { title: 'Access Permission', key: 'access-permission' },
    ],
  },
];

// Dashboard metric cards data
const metrics = [
  {
    title: 'Total Create Sticker',
    value: '12,456',
    change: '+12.5%',
    trend: 'up',
    icon: <QrCodeIcon />,
    color: '#1976d2',
  },
  {
    title: 'Inventory In',
    value: '8,234',
    change: '+8.2%',
    trend: 'up',
    icon: <TrendingUp />,
    color: '#2e7d32',
  },
  {
    title: 'Inventory Out',
    value: '6,789',
    change: '-3.4%',
    trend: 'down',
    icon: <TrendingDown />,
    color: '#ed6c02',
  },
  {
    title: 'Inventory Reserve',
    value: '1,445',
    change: '+5.1%',
    trend: 'up',
    icon: <Warehouse />,
    color: '#9c27b0',
  },
  {
    title: 'Inventory RTO In',
    value: '567',
    change: '-2.3%',
    trend: 'down',
    icon: <LocalShippingIcon />,
    color: '#d32f2f',
  },
  {
    title: 'Active Products',
    value: '2,345',
    change: '+15.8%',
    trend: 'up',
    icon: <CategoryIcon />,
    color: '#0288d1',
  },
  {
    title: 'Total Orders',
    value: '15,678',
    change: '+22.4%',
    trend: 'up',
    icon: <ShoppingCartIcon />,
    color: '#f57c00',
  },
  {
    title: 'Total Invoices',
    value: '14,234',
    change: '+18.9%',
    trend: 'up',
    icon: <Receipt />,
    color: '#5e35b1',
  },
];

export default function AutoFurnishDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const [selectedPage, setSelectedPage] = useState('dashboard');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (key) => {
    setOpenMenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handlePageSelect = (key) => {
    setSelectedPage(key);
  };

  const drawer = (
    <Box sx={{ overflow: 'auto', height: '100%', bgcolor: '#fff' }}>
      <Box sx={{ p: 3, borderBottom: '1px solid #e0e0e0' }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#1976d2' }}>
          AutoFurnish
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Sales & Inventory System
        </Typography>
      </Box>
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <Box key={item.key}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  if (item.submenu) {
                    handleMenuClick(item.key);
                  } else {
                    handlePageSelect(item.key);
                  }
                }}
                selected={selectedPage === item.key}
                sx={{
                  borderRadius: '8px',
                  mx: 1,
                  mb: 0.5,
                  '&.Mui-selected': {
                    bgcolor: 'rgba(25, 118, 210, 0.08)',
                    '&:hover': {
                      bgcolor: 'rgba(25, 118, 210, 0.12)',
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ color: selectedPage === item.key ? 'primary.main' : 'text.secondary', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.title} 
                  primaryTypographyProps={{ 
                    fontSize: '0.9rem',
                    fontWeight: selectedPage === item.key ? 600 : 400 
                  }}
                />
                {item.submenu && (
                  openMenus[item.key] ? <ExpandLess /> : <ExpandMore />
                )}
              </ListItemButton>
            </ListItem>
            {item.submenu && (
              <Collapse in={openMenus[item.key]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenu.map((subItem) => (
                    <ListItemButton
                      key={subItem.key}
                      sx={{
                        pl: 6,
                        py: 1,
                        borderRadius: '8px',
                        mx: 1,
                        mb: 0.5,
                        '&.Mui-selected': {
                          bgcolor: 'rgba(25, 118, 210, 0.08)',
                        },
                      }}
                      selected={selectedPage === subItem.key}
                      onClick={() => handlePageSelect(subItem.key)}
                    >
                      <ListItemText 
                        primary={subItem.title}
                        primaryTypographyProps={{ fontSize: '0.85rem' }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {/* App Bar */}
        <AppBar
          position="fixed"
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
            bgcolor: '#fff',
            color: '#000',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              {menuItems.find(m => m.key === selectedPage)?.title || 
               menuItems.flatMap(m => m.submenu || []).find(s => s.key === selectedPage)?.title || 
               'Dashboard'}
            </Typography>
            <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Box
          component="nav"
          sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { md: `calc(100% - ${drawerWidth}px)` },
            bgcolor: 'background.default',
            minHeight: '100vh',
          }}
        >
          <Toolbar />
          
          {/* Dashboard Content */}
          {selectedPage === 'dashboard' && (
            <Container maxWidth="xl">
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                  Sticker Dashboard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Overview of sticker generation and inventory movements
                </Typography>
              </Box>

              {/* Metrics Cards */}
              <Grid container spacing={3}>
                {metrics.map((metric, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card 
                      sx={{ 
                        height: '100%',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                        },
                      }}
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Avatar
                            sx={{
                              bgcolor: metric.color,
                              width: 48,
                              height: 48,
                              mr: 2,
                            }}
                          >
                            {metric.icon}
                          </Avatar>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                              {metric.title}
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                              {metric.value}
                            </Typography>
                          </Box>
                        </Box>
                        <Chip
                          label={metric.change}
                          size="small"
                          icon={metric.trend === 'up' ? <TrendingUp /> : <TrendingDown />}
                          sx={{
                            bgcolor: metric.trend === 'up' ? 'rgba(46, 125, 50, 0.1)' : 'rgba(211, 47, 47, 0.1)',
                            color: metric.trend === 'up' ? '#2e7d32' : '#d32f2f',
                            fontWeight: 600,
                          }}
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Additional Dashboard Sections */}
              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 3, borderRadius: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Recent Activities
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      {[
                        { action: 'Inventory Inward', items: '250 items', time: '2 hours ago', color: '#2e7d32' },
                        { action: 'Sticker Generated', items: '180 stickers', time: '4 hours ago', color: '#1976d2' },
                        { action: 'Order Processed', items: '45 orders', time: '5 hours ago', color: '#f57c00' },
                        { action: 'Invoice Created', items: '38 invoices', time: '6 hours ago', color: '#5e35b1' },
                      ].map((activity, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2,
                            pb: 2,
                            borderBottom: idx < 3 ? '1px solid #e0e0e0' : 'none',
                          }}
                        >
                          <Box
                            sx={{
                              width: 4,
                              height: 40,
                              bgcolor: activity.color,
                              borderRadius: 2,
                              mr: 2,
                            }}
                          />
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                              {activity.action}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {activity.items}
                            </Typography>
                          </Box>
                          <Typography variant="caption" color="text.secondary">
                            {activity.time}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 3, borderRadius: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Quick Stats
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      {[
                        { label: 'Total Warehouses', value: '12', icon: <Warehouse /> },
                        { label: 'Active Vendors', value: '48', icon: <People /> },
                        { label: 'Total SKUs', value: '2,345', icon: <LocalOffer /> },
                        { label: 'Pending Orders', value: '156', icon: <Assessment /> },
                      ].map((stat, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2,
                            pb: 2,
                            borderBottom: idx < 3 ? '1px solid #e0e0e0' : 'none',
                          }}
                        >
                          <Avatar
                            sx={{
                              bgcolor: 'rgba(25, 118, 210, 0.1)',
                              color: 'primary.main',
                              mr: 2,
                            }}
                          >
                            {stat.icon}
                          </Avatar>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                              {stat.label}
                            </Typography>
                          </Box>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {stat.value}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          )}

          {/* Page Components */}
          {selectedPage === 'product-master' && (
            <Container maxWidth="xl">
              <ProductMaster />
            </Container>
          )}
          
          {selectedPage === 'vendor-management' && (
            <Container maxWidth="xl">
              <VendorManagement />
            </Container>
          )}
          
          {selectedPage === 'inventory-inward' && (
            <Container maxWidth="xl">
              <InventoryInward />
            </Container>
          )}
          
          {selectedPage === 'stock-aging' && (
            <Container maxWidth="xl">
              <StockAging />
            </Container>
          )}
          
          {selectedPage === 'create-invoice' && (
            <Container maxWidth="xl">
              <CreateInvoice />
            </Container>
          )}
          
          {selectedPage === 'invoice-details' && (
            <Container maxWidth="xl">
              <InvoiceDetails />
            </Container>
          )}
          
          {selectedPage === 'generate-sticker-fg' && (
            <Container maxWidth="xl">
              <GenerateSticker />
            </Container>
          )}
          
          {selectedPage === 'amazon-sale' && (
            <Container maxWidth="xl">
              <UploadSale channel="Amazon" />
            </Container>
          )}
          
          {selectedPage === 'amazon-flex' && (
            <Container maxWidth="xl">
              <UploadSale channel="Amazon Flex" />
            </Container>
          )}
          
          {selectedPage === 'af-orders' && (
            <Container maxWidth="xl">
              <UploadSale channel="AutoFurnish" />
            </Container>
          )}
          
          {selectedPage === 'user-account' && (
            <Container maxWidth="xl">
              <UserAccount />
            </Container>
          )}
          
          {selectedPage === 'amazon-payment' && (
            <Container maxWidth="xl">
              <AmazonPayment />
            </Container>
          )}
          
          {selectedPage === 'shipment-manifest' && (
            <Container maxWidth="xl">
              <ShipmentManifest />
            </Container>
          )}
          
          {selectedPage === 'create-menu' && (
            <Container maxWidth="xl">
              <CreateMenu />
            </Container>
          )}
          
          {selectedPage === 'access-permission' && (
            <Container maxWidth="xl">
              <AccessPermission />
            </Container>
          )}
          
          {selectedPage === 'vendor-addresses' && (
            <Container maxWidth="xl">
              <VendorAddresses />
            </Container>
          )}
          
          {selectedPage === 'amazon-sticker' && (
            <Container maxWidth="xl">
              <AmazonSticker />
            </Container>
          )}
          
          {selectedPage === 'generate-car-sticker' && (
            <Container maxWidth="xl">
              <CarSticker />
            </Container>
          )}
          
          {selectedPage === 'regenerate-sticker' && (
            <Container maxWidth="xl">
              <RegenerateSticker />
            </Container>
          )}
          
          {selectedPage === 'rto-return' && (
            <Container maxWidth="xl">
              <RTOReturn />
            </Container>
          )}
          
          {selectedPage === 'inventory-reserve' && (
            <Container maxWidth="xl">
              <InventoryReserve />
            </Container>
          )}
          
          {selectedPage === 'move-inventory' && (
            <Container maxWidth="xl">
              <MoveInventory />
            </Container>
          )}
          
          {selectedPage === 'inventory-report' && (
            <Container maxWidth="xl">
              <InventoryReport />
            </Container>
          )}
          
          {selectedPage === 'create-picklist' && (
            <Container maxWidth="xl">
              <CreatePicklist />
            </Container>
          )}
          
          {selectedPage === 'scan-qr' && (
            <Container maxWidth="xl">
              <ScanQR />
            </Container>
          )}
          
          {selectedPage === 'shiprocket-report' && (
            <Container maxWidth="xl">
              <ShiprocketReport />
            </Container>
          )}
          
          {selectedPage === 'create-submenu' && (
            <Container maxWidth="xl">
              <CreateSubMenu />
            </Container>
          )}

          {/* Other Pages - Placeholder */}
          {!['dashboard', 'product-master', 'vendor-management', 'vendor-addresses', 'inventory-inward', 'stock-aging', 
              'create-invoice', 'invoice-details', 'generate-sticker-fg', 'amazon-sticker', 'generate-car-sticker',
              'regenerate-sticker', 'amazon-sale', 'amazon-flex', 'af-orders', 'user-account', 'amazon-payment', 
              'shipment-manifest', 'shiprocket-report', 'create-menu', 'create-submenu', 'access-permission',
              'rto-return', 'inventory-reserve', 'move-inventory', 'inventory-report', 'create-picklist', 'scan-qr'].includes(selectedPage) && (
            <Container maxWidth="xl">
              <Paper sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                  {menuItems.flatMap(m => [...(m.submenu || []), m]).find(s => s.key === selectedPage)?.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                  This page is ready for implementation with specific functionality.
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Chip label="UI Ready" color="primary" />
                  <Chip label="Awaiting Data Integration" sx={{ ml: 1 }} />
                </Box>
              </Paper>
            </Container>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
