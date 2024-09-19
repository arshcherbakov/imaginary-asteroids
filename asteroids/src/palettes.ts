import { PaletteMode } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    border: {
      main: string; // Определяем тип для border, так как его нет в стандартной палитре
    };
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    border?: {
      main: string; // Опции для кастомного поля border
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
    main: '#e5e5e5',
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
    main: '#fff',
  },
};

export { darkPalette, lightPalette };
