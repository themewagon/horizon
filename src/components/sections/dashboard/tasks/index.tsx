import { Box, Paper, Stack, ButtonBase } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Task from './Task';
import { tasksData } from 'data/tasksData';
import { useState } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState(tasksData);

  return (
    <Paper sx={{ p: 2.5 }}>
      <Stack alignItems="center" justifyContent="space-between">
        <FormGroup>
          <FormControlLabel
            sx={(theme) => ({
              '& .MuiFormControlLabel-label': {
                ml: 1,
                mt: 0.15,
                fontSize: theme.typography.h6.fontSize,
                fontWeight: 700,
              },
            })}
            control={<Checkbox checked={tasks.some((item) => item.checked)} />}
            label="Tasks"
          />
        </FormGroup>

        <Stack
          component={ButtonBase}
          alignItems="center"
          justifyContent="center"
          height={36}
          width={36}
          bgcolor="info.main"
          borderRadius={2.5}
        >
          <IconifyIcon icon="ic:baseline-more-horiz" color="primary.main" fontSize="h4.fontSize" />
        </Stack>
      </Stack>

      <Box mt={2.5}>
        {tasks.map((item) => (
          <Task tasks={tasks} setTasks={setTasks} data={item} />
        ))}
      </Box>
    </Paper>
  );
};

export default Tasks;
