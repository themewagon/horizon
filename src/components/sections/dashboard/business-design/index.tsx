import {
  Box,
  Paper,
  Stack,
  ButtonBase,
  Typography,
  Avatar,
  AvatarGroup,
  Button,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import Avatar1 from 'assets/images/avatars/avatar1.png';
import Avatar2 from 'assets/images/avatars/avatar2.png';
import Avatar3 from 'assets/images/avatars/avatar3.png';
import Avatar4 from 'assets/images/avatars/avatar4.png';
import Avatar5 from 'assets/images/avatars/avatar5.png';

const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];

const BusinessDesign = () => {
  return (
    <Stack component={Paper} direction="column" p={0} height={390} overflow="hidden">
      <Box p={3.5}>
        <Stack spacing={1.5} alignItems="center">
          <Stack
            component={ButtonBase}
            alignItems="center"
            justifyContent="center"
            height={52}
            width={52}
            bgcolor="error.light"
            borderRadius={3}
          >
            <IconifyIcon icon="mdi:fire" color="error.main" fontSize="h2.fontSize" />
          </Stack>

          <Box mt={-0.5}>
            <Typography variant="caption" color="text.disabled">
              Business Design
            </Typography>
            <Typography mt={-0.35} variant="body1" fontWeight={700} noWrap>
              New lession is available
            </Typography>
          </Box>
        </Stack>

        <Typography mt={6} variant="h5" lineHeight={1.65} noWrap>
          What do you need to know to <br /> create better products?
        </Typography>
      </Box>

      <Stack direction="column" mt="auto" px={3.5} py={3} height={165} bgcolor="info.light">
        <Stack alignItems="center" spacing={3.5}>
          <Stack alignItems="center" justifyContent="center" borderRadius={2.5} spacing={0.75}>
            <IconifyIcon icon="ic:sharp-timer" color="success.dark" fontSize="h3.fontSize" />
            <Typography variant="body1" fontWeight={700}>
              85 mins
            </Typography>
          </Stack>

          <Stack alignItems="center" justifyContent="center" borderRadius={2.5} spacing={0.75}>
            <IconifyIcon
              icon="ic:outline-slow-motion-video"
              color="error.main"
              fontSize="h3.fontSize"
            />
            <Typography variant="body1" fontWeight={700}>
              Video format
            </Typography>
          </Stack>
        </Stack>

        <Stack mt="auto" alignItems="center" justifyContent="space-between">
          <Stack height={1} alignItems="center">
            <AvatarGroup
              renderSurplus={(surplus) => (
                <Typography component="span" variant="body2" color="primary.main" fontWeight={700}>
                  {surplus.toString()}+
                </Typography>
              )}
              total={22}
            >
              {avatars.map((avatar: string, index) => (
                <Avatar key={avatar} alt="avatar" src={avatar} sx={{ zIndex: index }} />
              ))}
            </AvatarGroup>
          </Stack>

          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BusinessDesign;
