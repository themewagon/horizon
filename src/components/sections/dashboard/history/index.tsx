import { Box, Stack, Paper, Typography, Button } from '@mui/material';
import HistoryCard from './HistoryCard';
import { cardsData } from 'data/cardsData';

const History = () => {
  return (
    <Box component={Paper} p={2} height={390}>
      <Stack alignItems="center" justifyContent="space-between">
        <Typography variant="h5">History</Typography>
        <Button variant="contained" color="secondary" size="small">
          See all
        </Button>
      </Stack>

      <Box mt={2}>
        {cardsData.slice(0, 3).map((item) => (
          <HistoryCard data={item} />
        ))}
      </Box>
    </Box>
  );
};

export default History;
