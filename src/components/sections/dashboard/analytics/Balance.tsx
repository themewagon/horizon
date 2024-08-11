import { Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const Balance = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      columnGap={2.25}
      sx={{ bgcolor: 'common.white', borderRadius: 5, p: 2.5, minWidth: 200 }}
    >
      <div>
        <Typography variant="body1" color="text.primary" noWrap>
          Your Balance
        </Typography>
        <Typography variant="h3" color="text.secondary">
          $1,000
        </Typography>
      </div>

      <Stack direction="row" alignItems="center" spacing={0.5}>
        <IconifyIcon icon="circle-flags:um" sx={{ fontSize: 50 }} />
        <IconifyIcon icon="ri:arrow-down-s-line" sx={{ fontSize: 24 }} />
      </Stack>
    </Stack>
  );
};

export default Balance;
