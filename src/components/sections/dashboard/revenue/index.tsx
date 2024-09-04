import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import RevenueChart from './RevenueChart';
import { revenueChartData } from 'data/revenueChartData';

const Revenue = () => {
  return (
    <Box component={Paper} height={345}>
      <Stack justifyContent="space-between">
        <Typography variant="h4">Weekly Revenue</Typography>
        <Stack
          alignItems="center"
          justifyContent="center"
          height={36}
          width={36}
          bgcolor="info.main"
          borderRadius={2.5}
        >
          <IconifyIcon icon="ic:round-bar-chart" color="primary.main" fontSize="h4.fontSize" />
        </Stack>
      </Stack>

      <RevenueChart data={revenueChartData} sx={{height: '260px !important'}} />
    </Box>
  );
};

export default Revenue;
