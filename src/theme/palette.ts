import { PaletteOptions } from '@mui/material/styles';
import { green, grey, indigo, lightBlue, red, yellow } from './colors';

declare module '@mui/material/styles' {
  // interface Palette {
  //   neutral: PaletteColor;
  // }

  // interface PaletteOptions {
  //   neutral?: PaletteColorOptions;
  // }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
}

const palette: PaletteOptions = {
  grey,
  text: {
    primary: grey[100],
    secondary: indigo[500],
  },

  action: {
    hover: indigo[500],
    selected: indigo[500],
  },

  // neutral: {
  //   main: grey[100],
  // },

  primary: {
    lighter: indigo[100],
    light: indigo[300],
    main: indigo[500],
    dark: indigo[700],
  },

  error: {
    main: red[500],
  },

  warning: {
    main: yellow[500],
  },

  success: {
    main: green[500],
  },

  info: {
    main: lightBlue[500],
  },
};

export default palette;
