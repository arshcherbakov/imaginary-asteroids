import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import ChangeThemeButton from './index';

const mockHandlerSwitch = jest.fn();

const renderChangeThemeButton = (mockChecked: boolean) =>
  render(
    <ChangeThemeButton
      checked={mockChecked}
      handlerSwitch={mockHandlerSwitch}
    />,
  );

describe('component ChangeThemeButton', () => {
  it('Отображение Checkbox с флагом true', () => {
    renderChangeThemeButton(true);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });

  it('Отображение Checkbox с флагом false', () => {
    renderChangeThemeButton(false);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it('Обработчик handlerSwitch', () => {
    renderChangeThemeButton(false);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(mockHandlerSwitch).toHaveBeenCalledTimes(1);
  });
});
