import { Box, Stack, Paper, Typography, ButtonBase } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { teamMembersData } from 'data/teamMembersData';
import MemberCard from './MemberCard';

const TeamMembers = () => {
  return (
    <Box component={Paper} p={2.5} height={390}>
      <Stack alignItems="center" justifyContent="space-between">
        <Typography variant="h5">Team members</Typography>
        <Stack
          component={ButtonBase}
          alignItems="center"
          justifyContent="center"
          height={36}
          width={36}
          bgcolor="info.main"
          borderRadius={2.5}
        >
          <IconifyIcon icon="ic:round-add-circle" color="primary.main" fontSize="h4.fontSize" />
        </Stack>
      </Stack>

      <Box mt={4}>
        {teamMembersData.slice(0, 3).map((item) => (
          <MemberCard data={item} />
        ))}
      </Box>
    </Box>
  );
};

export default TeamMembers;
