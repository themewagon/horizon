import { Card, Stack, Box, Typography, CardMedia } from '@mui/material';
import CardImg1 from 'assets/images/cards/cardImg1.png';
import IconifyIcon from 'components/base/IconifyIcon';
import customShadows from 'theme/shadows';

const HistoryCard = () => {
  return (
    <Card sx={{ '&:hover': { boxShadow: customShadows[1] } }}>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack spacing={2} alignItems="center">
          <CardMedia
            component="img"
            src={CardImg1}
            sx={{ height: 66, width: 66 }}
            alt="card_img_1"
          />
          <Box>
            <Typography mb={-0.45} variant="body2" fontWeight={700} noWrap>
              Colorful Heaven
            </Typography>
            <Typography mt={-0.45} variant="caption" color="text.disabled" fontWeight={400} noWrap>
              By Mark Benjamin
            </Typography>
          </Box>
        </Stack>

        <Stack spacing={0.35} alignItems="center">
          <IconifyIcon icon="ri:eth-fill" fontSize="body2.fontSize" />
          <Typography variant="body2" fontWeight={700}>
            1.30 ETH
          </Typography>
        </Stack>

        <Typography variant="body2" color="text.disabled">
          30s ago
        </Typography>
      </Stack>
    </Card>
  );
};

export default HistoryCard;
