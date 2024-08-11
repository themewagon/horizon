import { Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const Earnings = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      columnGap={2.25}
      sx={{ bgcolor: 'common.white', borderRadius: 5, p: 2.5, minWidth: 200 }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: 56, width: 56, bgcolor: 'grey.200', borderRadius: '50%' }}
      >
        <IconifyIcon icon="ic:round-bar-chart" sx={{ fontSize: 32, color: 'primary.dark' }} />
      </Stack>
      <div>
        <Typography variant="body1" color="text.primary">
          Earnings
        </Typography>
        <Typography variant="h3" color="text.secondary">
          $350.4
        </Typography>
      </div>
    </Stack>
  );
};

export default Earnings;
