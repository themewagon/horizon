import { Box, Link, List, Stack, Typography } from '@mui/material';
import sitemap from 'routes/sitemap';
import NavItem from './NavItem';
import SidebarCard from './SidebarCard';
import { rootPaths } from 'routes/paths';

const NavItems = () => {
  return (
    <List
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        gap: 2.5,
        pl: 4,
      }}
    >
      {sitemap.map((navItem) => (
        <NavItem key={navItem.id} item={navItem} />
      ))}
    </List>
  );
};

const SidebarContent = () => {
  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ height: 130, borderBottom: 1, borderBottomColor: 'grey.200' }}
      >
        <Typography variant="body2" component={Link} href={rootPaths.root}>
          HORIZON
        </Typography>
      </Stack>

      <Box
        sx={{
          height: '100vh',
          overflowY: 'auto',
        }}
      >
        <Stack py={3} minHeight="100vh" justifyContent="space-between" rowGap={30}>
          <NavItems />
          <SidebarCard />
        </Stack>
      </Box>
    </>
  );
};

export default SidebarContent;
