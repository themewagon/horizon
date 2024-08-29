import { Avatar, IconButton, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';
import Profile from 'assets/avatars/avatar4.png';
import IconifyIcon from 'components/base/IconifyIcon';

interface MenuItem {
  id: number;
  label: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  {
    id: 0,
    label: 'Profile',
    icon: 'material-symbols:person',
  },
  {
    id: 1,
    label: 'My Account',
    icon: 'material-symbols:account-box-sharp',
  },
  {
    id: 2,
    label: 'Logout',
    icon: 'uiw:logout',
  },
];

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const accountMenuItems = menuItems.map((menuItem) => (
    <MenuItem
      key={menuItem.id}
      onClick={handleClose}
      sx={{
        '&:hover .account-menu-icon': { color: 'common.white' },
      }}
    >
      <ListItemIcon>
        <IconifyIcon
          icon={menuItem.icon}
          sx={{ color: 'primary.main' }}
          className="account-menu-icon"
        />
      </ListItemIcon>
      <Typography variant="body1">{menuItem.label}</Typography>
    </MenuItem>
  ));

  return (
    <>
      <IconButton
        onClick={handleClick}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar
          sx={{
            width: 41,
            height: 41,
          }}
          alt="User Profile"
          src={Profile}
        />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {accountMenuItems}
      </Menu>
    </>
  );
};

export default ProfileMenu;
