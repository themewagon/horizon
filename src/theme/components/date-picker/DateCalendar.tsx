import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const DateCalendar: Components<Omit<Theme, 'components'>>['MuiDateCalendar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '& .MuiDayCalendar-header': {
        '& .MuiDayCalendar-weekDayLabel': {
          color: theme.palette.text.primary,
          fontSize: theme.typography.body2.fontSize,
          fontWeight: 700,
        },
      },
    }),
  },
};

export default DateCalendar;
