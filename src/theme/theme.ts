import { createTheme } from '@mui/material';
import palette from './palette';
import typography from './typography';
import shadows from './shadows';
import CssBaseline from './components/CssBaseline';
import ListItemButton from './components/ListItemButton';
import ListItemIcon from './components/ListItemIcon';
import ListItemText from './components/ListItemText';
import Link from './components/Link';
import Stack from './components/Stack';
import Paper from './components/Paper';
import Drawer from './components/Drawer';

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
    MuiLink: Link,
    MuiStack: Stack,
    MuiPaper: Paper,

    MuiDrawer: Drawer,
    MuiListItemButton: ListItemButton,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
  },
});

// Add custom shadows to theme
shadows.forEach((shadow, index) => {
  theme.shadows[index + 1] = shadow;
});
