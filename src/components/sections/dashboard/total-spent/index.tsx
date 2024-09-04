import { Box, Paper, Stack, Typography } from '@mui/material';
import DateSelect from './DateSelect';
import IconifyIcon from 'components/base/IconifyIcon';
import SpentChart from './SpentChart';

const TotalSpent = () => {
  return (
    <Box component={Paper} height={345}>
      <Stack justifyContent="space-between">
        <DateSelect />

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

      <Stack mt={1.75}>
        <Box>
          <Typography mt={0.35} variant="h2" color="text.primary">
            $37.5K
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2" color="text.disabled" fontWeight={500}>
              Total Spent
            </Typography>

            <Stack alignItems="center" spacing={0.25}>
              <IconifyIcon
                icon="ic:baseline-arrow-drop-up"
                color="success.main"
                fontSize="h6.fontSize"
              />
              <Typography variant="caption" color="success.main" fontWeight={700}>
                +2.45%
              </Typography>
            </Stack>
          </Stack>
          <Stack mt={2} alignItems="center" spacing={0.5}>
            <IconifyIcon icon="ic:round-check-circle" color="success.main" fontSize="h6.fontSize" />
            <Typography variant="body1" color="success.main" fontWeight={700}>
              On track
            </Typography>
          </Stack>
        </Box>

        <SpentChart
          data={[80, 100, 80, 150, 100, 120]}
          sx={{ flex: 1, height: '230px !important' }}
        />
      </Stack>
    </Box>
  );
};

export default TotalSpent;
