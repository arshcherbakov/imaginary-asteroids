import React, { useState, useEffect, useContext } from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import { themes } from '@storybook/theming';
import { Box } from '@mui/material';
import { Context } from '../src/context/context';
import { lightPalette, darkPalette } from '../src/palettes';
import ThemeContextProvider from '../src/providers/ThemeContext';

import { createTheme } from '@mui/material/styles';
import getPalette from '../src/helpers/get-palette';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const [mode, setMode] = useState<string>(context.globals.theme);
      const theme = createTheme(getPalette(mode));

      // useContext может быть вызван только внутри компонента-потомка провайдера контекста
      // Нельзя напрямую использовать useContext здесь
      // Вместо этого мы используем ThemeContextProvider для оборачивания компонентов
      return (
        <ThemeContextProvider>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Story />
            </Box>
          </ThemeProvider>
        </ThemeContextProvider>
      );
    },
  ],
};

export default preview;

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#333333' },
    ],
  },
  docs: {
    theme: themes.light, // По умолчанию светлая тема
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light Theme' },
        { value: 'dark', title: 'Dark Theme' },
      ],
    },
  },
};
