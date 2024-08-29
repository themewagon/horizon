import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Drawer: Components<Omit<Theme, 'components'>>['MuiDrawer'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '&:hover, &:focus': {
        '*::-webkit-scrollbar, *::-webkit-scrollbar-thumb': {
          visibility: 'visible',
        },
      },
      '*::-webkit-scrollbar-track': {
        marginTop: theme.spacing(14),
      },
    }),
    paper: ({ theme }) => ({
      padding: 0,
      height: '100vh',
      width: 290,
      border: 0,
      borderRadius: 0,
      backgroundColor: theme.palette.info.lighter,
      boxSizing: 'border-box',
    }),
  },
};

export default Drawer;
