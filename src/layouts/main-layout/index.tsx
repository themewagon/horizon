import { PropsWithChildren, useState } from 'react';
import { Box, Stack, Toolbar } from '@mui/material';
import VerticalNavbar from './sidebar/VerticalNavbar';
import Topbar from './topbar/Topbar';
import Footer from './footer/Footer';

const drawerWidth = 290;

const MainLayout = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <Stack direction="row">
      <Topbar />

      <VerticalNavbar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onHandleDrawerClose={handleDrawerClose}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2.5,
          minHeight: '100vh',
          width: { xs: 1, md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
        <Footer />
      </Box>
    </Stack>
  );
};

export default MainLayout;
