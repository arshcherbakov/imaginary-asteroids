import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoadingPage from '.';
import { FC, PropsWithChildren } from 'react';

const mockTheme = createTheme({
  palette: {
    loading: {
      pending: '#e5e5e5',
    },
  },
});

const MockProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>
);

const renderWithTheme = () =>
  render(
    <MockProvider>
      <LoadingPage />
    </MockProvider>,
  );

describe('component LoadingPage', () => {
  it('Отображение LoadingPage', () => {
    renderWithTheme();

    const circularProgress = screen.getByRole('progressbar');
    expect(circularProgress).toBeInTheDocument();
  });
});
