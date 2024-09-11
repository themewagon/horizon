import { TeamMemberProps } from 'data/teamMembersData';
import customShadows from 'theme/shadows';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconifyIcon from 'components/base/IconifyIcon';

interface MemberCardProps {
  data: TeamMemberProps;
}

const MemberCard = ({ data }: MemberCardProps) => {
  return (
    <Card sx={{ mb: 2.5, py: 1.75, borderRadius: 3.5, boxShadow: customShadows[1] }}>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack spacing={1.5} alignItems="center">
          <Avatar
            src={data.avatar}
            component={Link}
            href="#!"
            sx={{
              height: 52,
              width: 52,
              bgcolor: 'primary.main',
            }}
          />
          <CardContent>
            <Typography mb={-0.25} variant="body1" fontWeight={700} noWrap>
              {data.name}
            </Typography>
            <Typography mt={-0.25} variant="caption" color="text.disabled" fontWeight={400} noWrap>
              {data.role}
            </Typography>
          </CardContent>
        </Stack>

        <CardActions sx={{ mr: -1.5 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="card-menu"
            sx={{ bgcolor: 'transparent', '&:hover': { bgcolor: 'transparent' } }}
          >
            <IconifyIcon icon="ic:baseline-more-vert" color="text.disabled" />
          </IconButton>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default MemberCard;
