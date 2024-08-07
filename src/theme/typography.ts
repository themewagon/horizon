import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
  fontFamily: ['DM Sans', 'Poppins', 'sans-serif'].join(','),

  // lineHeight / fontSize
  // fontWeightLight: 300,
  // fontWeightRegular: 400,
  // fontWeightMedium: 500,
  // fontWeightBold: 700,

  h1: {
    fontWeight: 700,
    fontSize: '2.25rem', // 36px
    lineHeight: 1.55, // 56px
  },

  h2: {
    fontWeight: 700,
    fontSize: '2.215rem', // 34px
    lineHeight: 1.24, // 42px
  },

  h3: {
    fontWeight: 700,
    fontSize: '1.5rem', // 24px
    lineHeight: 1.33, // 32px
  },

  h4: {
    fontWeight: 700,
    fontSize: '1.25rem', // 20px
    lineHeight: 1.6, //32px
  },

  h5: {
    fontWeight: 700,
    fontSize: '1.125rem', // 18px
    lineHeight: 1.66, // 30px
  },

  h6: {
    fontWeight: 700,
    fontSize: '1rem', // 16px
    lineHeight: 1.875, // 30px
  },

  subtitle1: {
    fontWeight: 500,
    fontSize: '0.75rem', // 12px
    lineHeight: 1.6, //20px
  },

  subtitle2: {
    fontWeight: 700,
    fontSize: '1rem', // 16px
    lineHeight: 1.75, //28px
  },

  body1: {
    fontWeight: 500,
    fontSize: '0.875rem', // 14px
    lineHeight: 1.71, // 24px
  },

  body2: {
    fontWeight: 700,
    fontSize: '1.625rem', // 26px
    lineHeight: 1.625, // 16px
    fontFamily: 'Poppins',
  },

  button: {
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '1rem', // 16px
    lineHeight: 1.75, //28px
  },
};

export default typography;
