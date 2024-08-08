import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, IconButton, Stack, Typography } from '@mui/material';

import sitemap from 'routes/sitemap';
import IconifyIcon from 'components/base/IconifyIcon';
import Search from 'components/common/Search';
import AccountDropdown from './AccountDropdown';

interface TopbarProps {
  drawerWidth: number;
  onHandleDrawerToggle: () => void;
}

const Topbar = ({ drawerWidth, onHandleDrawerToggle }: TopbarProps) => {
  const location = useLocation();

  const pageTitle = useMemo(() => {
    const navItem = sitemap.find((navItem) => location.pathname === navItem.path);
    return navItem!.name;
  }, [location]);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { lg: `calc(100% - ${drawerWidth}px)` },
        pt: 6,
        px: 2.5,
        ml: { sm: `${drawerWidth}px` },
        height: 130,
      }}
    >
      <Typography variant="body1" color="primary.lighter" mb={0.25}>
        Pages / {pageTitle}
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        columnGap={5}
        rowGap={1}
      >
        <Typography variant="h2" color="primary.main">
          {pageTitle}
        </Typography>

        <Stack
          direction="row"
          spacing={{ sm: 1.5 }}
          justifyContent="space-around"
          alignItems="center"
          sx={{ borderRadius: 7.5, bgcolor: 'white', pl: 1.25 }}
        >
          <Search sx={{ display: { xs: 'none', md: 'block' } }} />

          <IconButton aria-label="search-icon" sx={{ display: { md: 'none' } }}>
            <IconifyIcon icon="gravity-ui:magnifier" sx={{ fontSize: 24 }} />
          </IconButton>

          <IconButton
            aria-label="open drawer"
            onClick={onHandleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <IconifyIcon icon="mdi:hamburger-menu" />
          </IconButton>

          <IconButton aria-label="notification-icon">
            <IconifyIcon icon="ic:baseline-notifications-none" />
          </IconButton>

          <IconButton aria-label="theme-mode-icon">
            <IconifyIcon icon="ic:sharp-dark-mode" />
          </IconButton>

          <IconButton aria-label="info-icon">
            <IconifyIcon icon="ic:outline-info" />
          </IconButton>

          <AccountDropdown />
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Topbar;
