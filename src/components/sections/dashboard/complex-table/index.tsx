import { useState, ChangeEvent } from 'react';
import {
  Box,
  Paper,
  Stack,
  Typography,
  ButtonBase,
  TextField,
  InputAdornment,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import DataTable from './DataTable';

const ComplexTable = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Box component={Paper} px={0}>
      <Stack px={3.5} justifyContent="space-between">
        <Typography variant="h4">Complex Table</Typography>
        <TextField
          variant="filled"
          size="small"
          placeholder="Search Task"
          value={searchText}
          onChange={handleInputChange}
          sx={{ width: 1, maxWidth: 250 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconifyIcon icon="eva:search-fill" />
              </InputAdornment>
            ),
          }}
        />
        <Stack
          component={ButtonBase}
          alignItems="center"
          justifyContent="center"
          height={36}
          width={36}
          bgcolor="info.main"
          borderRadius={2.5}
        >
          <IconifyIcon icon="ic:outline-more-horiz" color="primary.main" fontSize="h4.fontSize" />
        </Stack>
      </Stack>

      <Box mt={1.5} height={314}>
        <DataTable searchText={searchText} />
      </Box>
    </Box>
  );
};

export default ComplexTable;
