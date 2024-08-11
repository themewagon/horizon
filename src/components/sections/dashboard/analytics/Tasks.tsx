import { Stack, Typography } from '@mui/material';
import Add from 'components/icons/Add';

const Tasks = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      columnGap={2.25}
      sx={{ bgcolor: 'common.white', borderRadius: 5, p: 2.5, minWidth: 200 }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={(theme) => ({
          height: 56,
          width: 56,
          background: `linear-gradient(90deg, ${theme.palette.info.light}, ${theme.palette.info.dark})`,
          borderRadius: '50%',
        })}
      >
        <Add />
      </Stack>
      <div>
        <Typography variant="body1" color="text.primary">
          New Tasks
        </Typography>
        <Typography variant="h3" color="text.secondary">
          154
        </Typography>
      </div>
    </Stack>
  );
};

export default Tasks;
