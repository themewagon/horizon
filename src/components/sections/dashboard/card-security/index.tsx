import { Box, Paper, Typography, Button } from '@mui/material';
import Image from 'components/base/Image';
import Fingerprint from 'assets/images/fingerprint.png';

const CardSecurity = () => {
  return (
    <Box component={Paper}>
      <Image src={Fingerprint} height={70} width={62} />
      <Typography my={2.5} variant="h4">
        Control card security <br />
        in-app with a tap
      </Typography>

      <Typography mt={2.5} variant="caption" color="text.disabled" fontWeight={400}>
        Discover our cards benefits, with one tap.
      </Typography>

      <Button variant="contained" color="primary" fullWidth sx={{ mt: 4 }}>
        Cards
      </Button>
    </Box>
  );
};

export default CardSecurity;
