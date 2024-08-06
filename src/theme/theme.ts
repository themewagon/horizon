import { createTheme } from '@mui/material';
import palette from './palette';
import typography from './typography';
import shadows from './shadows';
import CssBaseline from './components/CssBaseline';

export const theme = createTheme({
  palette,
  typography,
  //   mixins: {
  //     toolbar: {
  //       minHeight: 120,
  //     },
  //   },
  components: {
    MuiCssBaseline: CssBaseline,
  },
});

// Add custom shadows to theme
shadows.forEach((shadow, index) => {
  theme.shadows[index + 1] = shadow;
});
