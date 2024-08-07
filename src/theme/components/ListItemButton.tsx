import { Components, Theme } from '@mui/material';

const ListItemButton: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    gutters: ({ theme }) => ({
      padding: theme.spacing(0.5, 0),
      backgroundColor: 'transparent',
      '&:hover': {
        color: theme.palette.action.hover,
        backgroundColor: 'transparent',
      },

      '&.Mui-selected': {
        color: theme.palette.action.selected,
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    }),
  },
};
export default ListItemButton;
