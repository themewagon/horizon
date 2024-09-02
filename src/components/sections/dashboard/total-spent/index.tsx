import { Box, Paper, Stack } from '@mui/material';
import DateSelect from './DateSelect';

const TotalSpent = () => {
  return (
    <Box component={Paper}>
      <Stack justifyContent="space-between">
        <DateSelect />
      </Stack>
    </Box>
  );
};

export default TotalSpent;
