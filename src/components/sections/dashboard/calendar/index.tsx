import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Stack, Paper, MenuItem, Select, SelectChangeEvent, FormControl } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { PickersCalendarHeaderProps } from '@mui/x-date-pickers';
import IconifyIcon from 'components/base/IconifyIcon';

interface CalendarHeaderProps {
  currentMonth: Dayjs;
  onMonthChange: (month: Dayjs) => void;
  onYearChange: (year: Dayjs) => void;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const years = Array.from({ length: 200 }, (_, i) => dayjs().year() - 100 + i);

const CalendarHeader = ({ currentMonth, onMonthChange, onYearChange }: CalendarHeaderProps) => {
  const handleMonthChange = (event: SelectChangeEvent<number>) => {
    const month = event.target.value as number;
    onMonthChange(dayjs(currentMonth).month(month));
  };

  const handleYearChange = (event: SelectChangeEvent<number>) => {
    const year = event.target.value as number;
    onYearChange(dayjs(currentMonth).year(year));
  };

  return (
    <Stack pb={1} spacing={2} justifyContent="center">
      <FormControl
        variant="filled"
        sx={{
          '& .MuiInputBase-root': {
            '&:focus-within': {
              borderColor: 'transparent !important',
              boxShadow: 'none',
            },
          },
        }}
      >
        <Select
          value={currentMonth.month()}
          onChange={handleMonthChange}
          IconComponent={() => (
            <IconifyIcon icon="ic:round-keyboard-arrow-down" fontSize="h3.fontSize" />
          )}
          sx={(theme) => ({
            '&.MuiInputBase-root': {
              bgcolor: `${theme.palette.info.main} !important`,
              '& .MuiBox-root': {
                color: 'primary.main',
              },
            },
            '& .MuiSelect-select': {
              color: `${theme.palette.primary.main} !important`,
            },
          })}
        >
          {months.map((month, index) => (
            <MenuItem key={index} value={index}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        variant="filled"
        sx={{
          '& .MuiInputBase-root': {
            bgcolor: 'transparent !important',
            '&:focus-within': {
              borderColor: 'transparent !important',
              boxShadow: 'none',
            },
          },
        }}
      >
        <Select
          value={currentMonth.year()}
          onChange={handleYearChange}
          IconComponent={() => (
            <IconifyIcon icon="ic:round-keyboard-arrow-down" fontSize="h3.fontSize" />
          )}
        >
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());

  const handleMonthChange = (month: Dayjs) => {
    setCurrentDate(month);
  };

  const handleYearChange = (year: Dayjs) => {
    setCurrentDate(year);
  };

  return (
    <Paper sx={{ px: 0, height: 390 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          slots={{
            calendarHeader: (props: PickersCalendarHeaderProps<Dayjs>) => (
              <CalendarHeader
                currentMonth={props.currentMonth}
                onMonthChange={handleMonthChange}
                onYearChange={handleYearChange}
              />
            ),
          }}
          dayOfWeekFormatter={(date: Dayjs) => {
            const dayMap: { [key: string]: string } = {
              Su: 'Su',
              Mo: 'Mo',
              Tu: 'Tu',
              We: 'We',
              Th: 'Th',
              Fr: 'Fr',
              Sa: 'St',
            };
            return dayMap[date.format('dd')] || date.format('dd');
          }}
          value={currentDate}
          onChange={(date) => setCurrentDate(date as Dayjs)}
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
        />
      </LocalizationProvider>
    </Paper>
  );
};

export default Calendar;
