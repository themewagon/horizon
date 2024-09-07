import { Card, Stack, Box, Typography, CardMedia } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import customShadows from 'theme/shadows';
import { CardProps } from 'data/cardsData';

interface HistoryCardProps {
  data: CardProps;
}

const HistoryCard = ({ data }: HistoryCardProps) => {
  return (
    <Card sx={{ mb: 0.75, bgcolor: 'transparent', '&:hover': { boxShadow: customShadows[1] } }}>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack spacing={2} alignItems="center">
          <CardMedia
            component="img"
            src={data.image}
            sx={{ height: 66, width: 66 }}
            alt="card_img_1"
          />
          <Box>
            <Typography mb={-0.45} variant="body2" fontWeight={700} noWrap>
              {data.title}
            </Typography>
            <Typography mt={-0.45} variant="caption" color="text.disabled" fontWeight={400} noWrap>
              By {data.artist}
            </Typography>
          </Box>
        </Stack>

        <Stack spacing={0.35} alignItems="center">
          <IconifyIcon icon="ri:eth-fill" fontSize="body2.fontSize" />
          <Typography variant="body2" fontWeight={700}>
            {data.price}
          </Typography>
        </Stack>

        <Typography variant="body2" color="text.disabled">
          {data.timeAgo} ago
        </Typography>
      </Stack>
    </Card>
  );
};

export default HistoryCard;
