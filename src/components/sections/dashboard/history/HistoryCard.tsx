import { useRef } from 'react';
import { NFTProps } from 'data/NFTData';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import useResizeObserver from 'hooks/useResizeObserver';
import customShadows from 'theme/shadows';

interface HistoryCardProps {
  data: NFTProps;
}

const HistoryCard = ({ data }: HistoryCardProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerSize = useResizeObserver(containerRef);

  console.log(containerSize);

  return (
    <Card
      ref={containerRef}
      sx={{ p: 1.5, mb: 0.875, bgcolor: 'transparent', '&:hover': { boxShadow: customShadows[1] } }}
    >
      <Stack alignItems="center" justifyContent="space-between">
        <Stack spacing={2} alignItems="center" minWidth={190}>
          <CardMedia
            component="img"
            src={data.image}
            sx={{ height: 60, width: 60 }}
            alt="card_img"
          />
          <div>
            <Typography mb={-0.45} variant="body2" fontWeight={700} noWrap>
              {data.title}
            </Typography>
            <Typography mt={-0.45} variant="caption" color="text.disabled" fontWeight={400} noWrap>
              By {data.artist}
            </Typography>
          </div>
        </Stack>

        <Stack spacing={0.35} alignItems="center">
          <IconifyIcon icon="ri:eth-fill" fontSize="body2.fontSize" />
          <Typography variant="body2" fontWeight={700}>
            {data.price}
          </Typography>
        </Stack>

        <Typography
          variant="body2"
          color="text.disabled"
          display={containerSize > 360 ? 'flex' : 'none'}
        >
          {data.timeAgo} ago
        </Typography>
      </Stack>
    </Card>
  );
};

export default HistoryCard;
