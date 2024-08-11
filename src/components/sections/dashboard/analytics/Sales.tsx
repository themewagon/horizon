import { Box, Typography } from '@mui/material';

const Sales = () => {
  return (
    <Box
      sx={{ bgcolor: 'common.white', borderRadius: 5, pt: 1.125, pb: 1.5, px: 2.5, minWidth: 200 }}
    >
      <Typography variant="body1" color="text.primary">
        Sales
      </Typography>
      <Typography variant="h3" color="text.secondary">
        $574.34
      </Typography>
      <Typography variant="subtitle1" color="text.primary">
        <Box sx={{ color: 'success.main', fontWeight: 'fontWeightBold' }} component="span">
          +23%
        </Box>{' '}
        since last month
      </Typography>
    </Box>
  );
};

export default Sales;
