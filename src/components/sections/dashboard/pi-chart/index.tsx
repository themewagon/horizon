import { Paper, Box, Stack, Typography, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import customShadows from 'theme/shadows';

const PiChart = () => {
  const [timeline, setTimeline] = useState('monthly');

  const handleSelectChange = (event: SelectChangeEvent) => {
    setTimeline(event.target.value);
  };

  return (
    <Paper>
      <Stack alignItems="center" justifyContent="space-between">
        <Typography variant="body1" fontWeight={700}>
          Your Pie Chart
        </Typography>

        <FormControl
          variant="filled"
          sx={{
            minWidth: 110,
            '& .MuiInputBase-root': {
              '&:focus-within': {
                borderColor: 'transparent !important',
                boxShadow: 'none',
              },
            },
          }}
        >
          <Select id="select-filled" value={timeline} onChange={handleSelectChange}>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Stack
        px={2}
        pt={3}
        pb={2.5}
        alignItems="center"
        borderRadius={4}
        boxShadow={customShadows[1]}
      >
        <Stack spacing={0.75} alignItems="flex-start" justifyContent="center" width="50%">
          <Box height={10} width={10} borderRadius="50%" bgcolor="primary.main" />
          <Box mt={-1}>
            <Typography variant="caption" color="text.disabled">
              Your files
            </Typography>
            <Typography variant="h6">63%</Typography>
          </Box>
        </Stack>
        <Stack spacing={0.75} alignItems="flex-start" justifyContent="center" width="50%">
          <Box height={10} width={10} borderRadius="50%" bgcolor="secondary.main" />
          <Box mt={-1}>
            <Typography variant="caption" color="text.disabled">
              System
            </Typography>
            <Typography variant="h6">25%</Typography>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PiChart;
