import { Typography, Avatar, Stack, Button } from '@mui/material';
import HorizonLogo from 'assets/horizonLogo.png';

const Logo = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={(theme) => ({
        width: 94,
        height: 94,
        border: theme.shape.borderRadius + 1,
        borderColor: 'common.white',
        background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`,
        borderRadius: '50%',
        position: 'absolute',
        left: '50%',
        top: 0,
        transform: 'translate(-50%, -50%)',
      })}
    >
      <Avatar src={HorizonLogo} sx={{ width: 40, height: 40 }} />
    </Stack>
  );
};

const SidebarCard = () => {
  return (
    <Stack
      alignItems="center"
      sx={(theme) => ({
        background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`,
        borderRadius: 6,
        position: 'relative',
        pt: 9,
        pb: 5,
        mx: 4,
      })}
    >
      <Logo />
      <Button sx={{ color: 'common.white' }}>Upgrade to PRO</Button>
      <Typography variant="body1" color="white">
        to get access to all features! <br />
        Connect with Venus World!
      </Typography>
    </Stack>
  );
};

export default SidebarCard;
