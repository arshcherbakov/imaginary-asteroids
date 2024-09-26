import '@testing-library/jest-dom/extend-expect';
import { PropsWithChildren, FC } from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Palette, ThemeProvider, createTheme } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import DateInputs from './index';
import { lightPalette } from '../../palettes';

const mockHandleSetDate = jest.fn();
const mockHandleSearchByDate = jest.fn();

const mockDateSearch = {
  startDate: null as Dayjs | null,
  endDate: null as Dayjs | null,
};

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
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </LocalizationProvider>
);

const renderDateInputs = (error = '') =>
  render(
    <MockProvider>
      <DateInputs
        handleSetDate={mockHandleSetDate}
        dateSearch={mockDateSearch}
        handleSearchByDate={mockHandleSearchByDate}
        errorValidate={error}
      />
    </MockProvider>,
  );

describe('component DateInputs', () => {
  it('Отображение лэйблов в DatePicker', () => {
    renderDateInputs();

    const labelDateStart = screen.getByLabelText(
      /Дата начала поиска астероидов/i,
    );
    const labelDateEnd = screen.getByLabelText(
      /Дата окончания поиска астероидов/i,
    );

    expect(labelDateStart).toBeInTheDocument();
    expect(labelDateEnd).toBeInTheDocument();
  });

  it('Отображение ввода дат в DatePicker', async () => {
    renderDateInputs();

    const inputDateStart = await screen.findByRole('textbox', {
      name: /Дата начала поиска астероидов/i,
    });
    const inputDateEnd = await screen.findByRole('textbox', {
      name: /Дата окончания поиска астероидов/i,
    });

    expect(inputDateStart).toBeInTheDocument();
    expect(inputDateEnd).toBeInTheDocument();
  });

  it('Отображение кнопки поиска в DatePicker', () => {
    renderDateInputs();

    const buttonSearch = screen.getByRole('button', { name: 'Найти' });

    expect(buttonSearch).toBeInTheDocument();
  });

  it('Вызов handleSetDate при изменении даты', async () => {
    renderDateInputs();

    const inputDateStart = await screen.findByRole('textbox', {
      name: /Дата начала поиска астероидов/i,
    });
    const inputDateEnd = await screen.findByRole('textbox', {
      name: /Дата окончания поиска астероидов/i,
    });

    const dateStart: string = '07/20/2024';
    const dateEnd: string = '07/20/2024';

    fireEvent.change(inputDateStart, { target: { value: dateStart } });
    fireEvent.change(inputDateEnd, { target: { value: dateEnd } });

    expect(mockHandleSetDate).toHaveBeenCalledWith(
      'startDate',
      expect.anything(),
    );
    expect(mockHandleSetDate).toHaveBeenCalledWith(
      'endDate',
      expect.anything(),
    );
  });

  it('Вызов handleSearchByDate при нажатии на кнопку поиска', () => {
    renderDateInputs();

    const buttonSearch = screen.getByRole('button', { name: 'Найти' });

    fireEvent.click(buttonSearch);

    expect(mockHandleSearchByDate).toHaveBeenCalled();
  });

  it('Отображение ошибки', () => {
    const errorMessage = 'Ошибка валидации';
    renderDateInputs(errorMessage);

    const errorText = screen.getByText(errorMessage);
    expect(errorText).toBeInTheDocument();
  });
});
