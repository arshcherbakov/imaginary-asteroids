import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomAccordion from '.';

const mockContenAccordion = 'Accordion Content';
const mockTitleAccordion = 'Title table';

const renderCustomAccordion = (title: string) =>
  render(
    <CustomAccordion title={title}>
      <p>{mockContenAccordion}</p>
    </CustomAccordion>,
  );

describe('component CustomAccordion', () => {
  it('Отображение заголовка', () => {
    renderCustomAccordion('Title table');

    const titleAccord = screen.getByText(mockTitleAccordion);

    expect(titleAccord).toBeInTheDocument();
  });

  it('Отображение контента после нажатия', () => {
    renderCustomAccordion(mockTitleAccordion);
    const accordionSummary = screen.getByText(mockTitleAccordion);
    const accordionContent = screen.queryByText(mockContenAccordion);

    expect(accordionContent).not.toBeVisible();

    fireEvent.click(accordionSummary);

    expect(accordionContent).toBeVisible();
  });

  it('Скрытие контента после нажатия', () => {
    renderCustomAccordion(mockTitleAccordion);
    const accordionSummary = screen.getByText(mockTitleAccordion);
    const accordionContent = screen.queryByText(mockContenAccordion);

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
