import { useState, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconifyIcon from 'components/base/IconifyIcon';
import DataTable from './DataTable';

const ComplexTable = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Box component={Paper} px={0} height={390}>
      <Stack px={3.5} justifyContent="space-between">
        <Typography variant="h4">Complex Table</Typography>

        <TextField
          variant="filled"
          size="small"
          placeholder="Search Task"
          value={searchText}
          onChange={handleInputChange}
          sx={{ width: 220 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconifyIcon icon="eva:search-fill" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Box mt={1} height={313}>
        <DataTable searchText={searchText} />
      </Box>
    </Box>
  );
};

export default ComplexTable;
