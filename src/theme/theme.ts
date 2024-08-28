import { createTheme } from '@mui/material';
import palette from './palette';
import typography from './typography';
import customShadows from './shadows';
import CssBaseline from './components/CssBaseline';
import ListItemButton from './components/ListItemButton';
import ListItemIcon from './components/ListItemIcon';
import ListItemText from './components/ListItemText';
import Link from './components/Link';
import Stack from './components/Stack';
import Paper from './components/Paper';
import Drawer from './components/Drawer';
import AppBar from './components/AppBar';
import InputBase from './components/InputBase';
import FilledInput from './components/FilledInput';
import InputAdornment from './components/InputAdornment';

export const theme = createTheme({
  palette,
  typography,
  customShadows,
  mixins: {
    toolbar: {
      minHeight: 130,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1600,
    },
  },
  components: {
    MuiCssBaseline: CssBaseline,
    MuiLink: Link,
    MuiStack: Stack,
    MuiPaper: Paper,

    MuiDrawer: Drawer,
    MuiListItemButton: ListItemButton,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,

    MuiAppBar: AppBar,
    MuiInputBase: InputBase,
    MuiFilledInput: FilledInput,
    MuiInputAdornment: InputAdornment,
  },
});
