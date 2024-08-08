import { InputAdornment, SxProps, TextField } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

interface SearchProps {
  sx?: SxProps;
}

const Search = (props: SearchProps) => {
  return (
    <TextField
      id="input-with-searchIcon-textfield"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconifyIcon icon="gravity-ui:magnifier" sx={{ color: 'primary.main', fontSize: 11 }} />
          </InputAdornment>
        ),
      }}
      type="text"
      variant="filled"
      placeholder="Search"
      hiddenLabel
      fullWidth
      {...props}
    />
  );
};

export default Search;
