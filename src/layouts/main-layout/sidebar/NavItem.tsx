import { useLocation } from 'react-router-dom';
import { Link, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { MenuItem } from 'routes/sitemap';
import IconifyIcon from 'components/base/IconifyIcon';

const NavItem = ({ item }: { item: MenuItem }) => {
  const location = useLocation();

  const { name, path, icon, active } = item;

  return (
    <ListItem
      sx={{
        p: 0,
        opacity: active ? 1 : 0.5,
      }}
    >
      <ListItemButton
        selected={location.pathname === path}
        component={Link}
        href={path}
        sx={[
          location.pathname === path && {
            borderRight: 4,
            '.MuiListItemIcon-root': {
              color: 'primary.dark',
            },
          },
          {
            '&:hover .MuiListItemIcon-root': {
              color: 'primary.dark',
            },
          },
        ]}
      >
        <ListItemIcon sx={{ mr: 1.5, color: 'grey.100', transition: 'color 0.3s' }}>
          <IconifyIcon icon={icon} fontSize={24} />
        </ListItemIcon>
        <ListItemText
          primary={name}
          sx={[location.pathname === path && { fontWeight: 'fontWeightBold' }]}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default NavItem;
