declare module '@mui/material/styles' {
  interface Theme {
    customShadows: string[];
  }
  interface ThemeOptions {
    customShadows?: string[];
  }
}

const customShadows = ['2px 2px 10px 0px rgba(10,10,10,0.2)'];

export default customShadows;