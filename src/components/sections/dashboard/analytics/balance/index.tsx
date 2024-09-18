import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CountryMenu from './CountryMenu';

const Balance = () => {
  return (
    <Stack
      component={Paper}
      alignItems="center"
      justifyContent="space-between"
      p={2.5}
      height={100}
    >
      <div>
        <Typography variant="body2" color="text.disabled">
          Your Balance
        </Typography>
        <Typography mt={0.25} variant="h3">
          $1,000
        </Typography>
      </div>
      <CountryMenu />
    </Stack>
  );
};

export default Balance;
