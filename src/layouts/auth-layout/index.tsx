import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';

const AuthLayout = () => {
  return (
    <Stack justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="neutral.lighter">
      <Outlet />
    </Stack>
  );
};

export default AuthLayout;
