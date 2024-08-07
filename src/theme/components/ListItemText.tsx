import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ListItemText: Components<Omit<Theme, 'components'>>['MuiListItemText'] = {
  defaultProps: { disableTypography: true },
  styleOverrides: {
    root: ({ theme }) => ({
      margin: 0,
      fontSize: theme.typography.htmlFontSize,
      fontWeight: theme.typography.fontWeightMedium,
    }),
  },
};

export default ListItemText;
