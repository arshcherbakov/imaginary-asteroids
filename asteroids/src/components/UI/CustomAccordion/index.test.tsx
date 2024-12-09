import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomAccordion from '.';

const mockContenAccordion: string = 'Accordion Content';
const mockTitleAccordion: string = 'Title table';

const renderCustomAccordion = () =>
  render(
    <CustomAccordion title={mockTitleAccordion}>
      <p>{mockContenAccordion}</p>
    </CustomAccordion>,
  );

describe('component CustomAccordion', () => {
  it('Отображение заголовка', () => {
    renderCustomAccordion();

    const titleAccord = screen.getByText(mockTitleAccordion);

    expect(titleAccord).toBeInTheDocument();
  });

  it('Отображение контента после нажатия', () => {
    renderCustomAccordion();
    const accordionSummary = screen.getByText(mockTitleAccordion);
    const accordionContent = screen.queryByText(mockContenAccordion);

    expect(accordionContent).not.toBeVisible();

    fireEvent.click(accordionSummary);

    expect(accordionContent).toBeVisible();
  });

  it('Скрытие контента после нажатия', () => {
    renderCustomAccordion();
    const accordionSummary = screen.getByText(mockTitleAccordion);

    // Проверяем, что аккордеон изначально свернут
    const accordionElement = accordionSummary.closest('.MuiAccordion-root');
    expect(accordionElement).not.toHaveClass('Mui-expanded');

    // Эмулируем клик для открытия аккордеона
    fireEvent.click(accordionSummary);
    expect(accordionElement).toHaveClass('Mui-expanded'); // Аккордеон открыт

    // Эмулируем повторный клик для закрытия аккордеона
    fireEvent.click(accordionSummary);
    expect(accordionElement).not.toHaveClass('Mui-expanded');
  });
});
