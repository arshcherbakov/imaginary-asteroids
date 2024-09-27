import '@testing-library/jest-dom/extend-expect';
import { render, screen, act } from '@testing-library/react';
import SnackbarMessage from '.';

const mockMessage: string = 'Error';
const mockAutoHideDuration: number = 4000;
const mockSnackbarClose = jest.fn();

const renderSnackbarMessage = (isOpen: boolean) =>
  render(
    <SnackbarMessage
      open={isOpen}
      snackbarClose={mockSnackbarClose}
      message={mockMessage}
    />,
  );

describe('component SnackbarMessage', () => {
  it('Отображение SnackbarMessage', () => {
    renderSnackbarMessage(true);

    const snackbarMessage = screen.getByText(mockMessage);

    expect(snackbarMessage).toBeInTheDocument();
  });

  it('Отображение SnackbarMessage при false', () => {
    renderSnackbarMessage(false);

    const snackbarMessage = screen.queryByText(mockMessage);

    expect(snackbarMessage).not.toBeInTheDocument();
  });

  it('Закрытие snackbar после 4 секунд', () => {
    jest.useFakeTimers();

    renderSnackbarMessage(true);

    // Оборачиваем изменения времени в act
    act(() => {
      jest.advanceTimersByTime(mockAutoHideDuration);
    });

    expect(mockSnackbarClose).toHaveBeenCalled();
  });
});
