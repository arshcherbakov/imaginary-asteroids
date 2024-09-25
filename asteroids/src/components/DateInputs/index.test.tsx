import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import DateInputs from './index';
import { Palette, ThemeProvider, createTheme } from '@mui/material/styles';
import { darkPalette, lightPalette } from '../../palettes';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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

const RenderDateInputs = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <DateInputs
          handleSetDate={mockHandleSetDate}
          dateSearch={mockDateSearch}
          handleSearchByDate={mockHandleSearchByDate}
          errorValidate=""
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
};

describe('component DateInputs', () => {
  it('Отображение лэйблов в DatePicker', () => {
    render(<RenderDateInputs />);

    const labelDateStart = screen.getByLabelText(
      /Дата окончания поиска астероидов/i,
    );
    const labelDateEnd = screen.getByLabelText(
      /Дата начала поиска астероидов/i,
    );

    expect(labelDateStart).toBeInTheDocument();
    expect(labelDateEnd).toBeInTheDocument();
  });

  it('Отображение кнопки поиска в DatePicker', () => {
    render(<RenderDateInputs />);

    const buttonSearch = screen.getByText('Найти');

    expect(buttonSearch).toBeInTheDocument();
  });

  it('Отображение ввода дат в DatePicker', () => {
    render(<RenderDateInputs />);
  });
});

// test('component DateInputs', () => {
//   render(
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <ThemeProvider theme={theme}>
//         <DateInputs
//           handleSetDate={mockHandleSetDate}
//           dateSearch={mockDateSearch}
//           handleSearchByDate={mockHandleSearchByDate}
//           errorValidate=""
//         />
//       </ThemeProvider>
//     </LocalizationProvider>,
//   );

//   const labelDateStart = screen.getByLabelText(
//     /Дата окончания поиска астероидов/i,
//   );
//   const labelDateEnd = screen.getByLabelText(/Дата начала поиска астероидов/i);

//   expect(labelDateStart).toBeInTheDocument();
//   expect(labelDateEnd).toBeInTheDocument();
// });
