import { PropsWithChildren, FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchInput from '.';
import { lightPalette } from '../../palettes';
import { Palette } from '@mui/material/styles';

const mockHandleTextFieldSearch = jest.fn();
const mockHandleButtonSearch = jest.fn();

// const mockTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//       contrastText: '#ffffff',
//     },
//     tertiary: {
//       main: '#00c853',
//     },
//   },
// });

declare module '@mui/material/styles' {
  interface Palette {
    lightPalette: typeof lightPalette;
  }
  interface PaletteOptions {
    lightPalette?: typeof lightPalette;
  }
}
const theme = createTheme({
  palette: {
    lightPalette,
  } as Palette,
});

const MockProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const renderSearchInput = (error: string) =>
  render(
    <MockProvider>
      <SearchInput
        handleTextFieldSearch={mockHandleTextFieldSearch}
        handleButtonSearch={mockHandleButtonSearch}
        validError={error}
      />
    </MockProvider>,
  );

// describe('component SearchInput', () => {
//   it('Отображение кнопки поиска', () => {
//     renderSearchInput('');

//     const button = screen.getByRole('button');

//     expect(button).toBeInTheDocument();
//   });

//   it('Отображение поле ввода', () => {
//     renderSearchInput('');

//     const inputSearch = screen.getByRole('input');

//     expect(inputSearch).toBeInTheDocument();
//   });
// });
