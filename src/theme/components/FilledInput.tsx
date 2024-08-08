import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FilledInput: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
  defaultProps: { disableUnderline: true },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 12,
      paddingLeft: theme.spacing(2.5),
    }),

    input: ({ theme }) => ({
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.fontSize,
      lineHeight: 1.42,
      paddingRight: theme.spacing(2.5),
    }),

    adornedStart: ({ theme }) => ({
      backgroundColor: theme.palette.grey[200],
      color: theme.palette.grey[100],
    }),
  },
};

export default FilledInput;
