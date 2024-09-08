import {
  Card,
  Stack,
  Typography,
  CardContent,
  Link,
  Avatar,
  CardActions,
  IconButton,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { TeamMemberProps } from 'data/teamMembersData';
import customShadows from 'theme/shadows';

interface MemberCardProps {
  data: TeamMemberProps;
}

const MemberCard = ({ data }: MemberCardProps) => {
  return (
    <Card sx={{ mb: 2.5, py: 1.5, borderRadius: 3.5, boxShadow: customShadows[1] }}>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack spacing={1.5} alignItems="center">
          <Avatar
            src={data.avatar}
            component={Link}
            href="#!"
            sx={{
              height: 48,
              width: 48,
              bgcolor: 'primary.main',
            }}
          />
          <CardContent>
            <Typography mb={-0.25} variant="body2" fontWeight={700} noWrap>
              {data.name}
            </Typography>
            <Typography mt={-0.25} variant="caption" color="text.disabled" fontWeight={400} noWrap>
              {data.role}
            </Typography>
          </CardContent>
        </Stack>

        <CardActions>
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
