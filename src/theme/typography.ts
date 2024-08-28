import { TypographyOptions } from '@mui/material/styles/createTypography';

export const fontFamily = {
  DMSans: ['DM Sans', 'sans-serif'].join(','),
  poppins: ['Poppins', 'sans-serif'].join(','),
};

const typography: TypographyOptions = {
  fontFamily: fontFamily.DMSans,
  h1: {
    fontWeight: 700,
    fontSize: '2.25rem',
    lineHeight: 1.55,
  },
  h2: {
    fontWeight: 700,
    fontSize: '2.215rem',
    lineHeight: 1.24,
  },
  h3: {
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: 1.33,
  },
  h4: {
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: 1.6,
  },
  h5: {
    fontWeight: 700,
    fontSize: '1.125rem',
    lineHeight: 1.66,
  },
  h6: {
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: 1.875,
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: '0.75rem',
    lineHeight: 1.6,
  },
  subtitle2: {
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: 1.75,
  },
  body1: {
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.71,
  },
  body2: {
    fontWeight: 700,
    fontSize: '1.625rem',
    lineHeight: 1.625,
  },
  button: {
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: 1.75,
  },
};

export default typography;
