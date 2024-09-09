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
      '& .MuiPickersSlideTransition-root': {
        '& .MuiDayCalendar-monthContainer': {
          '& .MuiDayCalendar-weekContainer': {
            '& .MuiPickersDay-today': {
              border: 'none',
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.info.main,
            },
            '& .MuiPickersDay-today.Mui-selected': {
              color: theme.palette.info.lighter,
              backgroundColor: theme.palette.primary.main,
            },
          },
        },
      },
    }),
  },
};

export default DateCalendar;
