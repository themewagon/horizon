import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FormControlLabel: Components<Omit<Theme, 'components'>>['MuiFormControlLabel'] = {
  styleOverrides: {
    root: {
      marginLeft: 0,
    },
    label: ({ theme }) => ({
      marginLeft: 0,
      letterSpacing: 0.25,
      fontSize: theme.typography.body1.fontSize,
      userSelect: 'none',
    }),
  },
};

export default FormControlLabel;
