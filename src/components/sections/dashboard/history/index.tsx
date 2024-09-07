import { Box, Stack, Paper, Typography, Button } from '@mui/material';
import HistoryCard from './HistoryCard';

const History = () => {
  return (
    <Box component={Paper} p={2}>
      <Stack alignItems="center" justifyContent="space-between">
        <Typography variant="h5">History</Typography>
        <Button variant="contained" color="secondary" size="small">
          See all
        </Button>
      </Stack>

      <Box>
        <HistoryCard />
      </Box>
    </Box>
  );
};

export default History;
