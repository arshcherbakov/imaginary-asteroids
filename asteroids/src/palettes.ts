import { PaletteMode } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    border: {
      main: string;
    };
    loading: {
      pending: string;
    };
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    border?: {
      main: string;
    };
    loading: {
      pending: string;
    };
  }
}

const darkPalette = {
  mode: 'dark' as PaletteMode,
  primary: {
    main: '#000',
    light: '#121212',
    contrastText: '#fff',
  },
  secondary: {
    main: '#fff',
  },
  tertiary: {
    main: '#767272',
  },
  border: {
    main: '#fff',
  },
  loading: {
    pending: '#e5e5e5',
  },
};

const lightPalette = {
  mode: 'light' as PaletteMode,
  primary: {
    main: '#fff',
    light: '#e5e5e5',
    contrastText: '#000',
  },
  secondary: {
    main: '#cdcdcd',
  },
  tertiary: {
    main: '#e5e5e5',
  },
  border: {
    main: '#e5e5e5',
  },
  loading: {
    pending: '#0b3d91',
  },
};

export { darkPalette, lightPalette };
