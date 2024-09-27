import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import FormAccordion from '.';
import { IApproachData } from '../../../interfaces';

const mockData: IApproachData = {
  orbiting_body: 'Земля',
  close_approach_date: '2024-09-28',
  close_approach_date_full: '2024-09-28T12:34:56',
  epoch_date_close_approach: 1700000000000,
  relative_velocity: {
    kilometers_per_hour: '50000',
    kilometers_per_second: '14',
    miles_per_hour: '31068',
  },
  miss_distance: {
    astronomical: '0.05',
    lunar: '19.5',
    kilometers: '75000',
    miles: '46603',
  },
};

const renderFormAccordion = () => render(<FormAccordion data={mockData} />);

describe('component FormAccordion', () => {
  it('Отображение данных', () => {
    renderFormAccordion();

    expect(screen.getByText(/Земля/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Ближайшая дата сближения: 2024-09-28/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Полная дата сближения: 2024-09-28T12:34:56/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Эпоха, дата сближения: 1700000000000/i),
    ).toBeInTheDocument();
  });

  it('Отображение значений по умолчанию', () => {
    renderFormAccordion();

    expect(screen.getByText(/Относительная скорость:/i)).toBeInTheDocument();
    expect(screen.getByText(/14/i)).toBeInTheDocument();

    expect(screen.getByText(/Расстояние промаха:/i)).toBeInTheDocument();
    expect(screen.getByText(/0.05/i)).toBeInTheDocument();
  });

  it('Значение скорости изменилось', () => {
    renderFormAccordion();

    const speedSelector = screen.getByText('км/с');
    expect(speedSelector).toBeInTheDocument();

    fireEvent.mouseDown(speedSelector);

    const option = screen.getByText('км/ч');
    fireEvent.click(option);

    fireEvent.change(speedSelector, { value: 'kilometers_per_hour' });

    expect(
      screen.getByText('Относительная скорость:50000'),
    ).toBeInTheDocument();
  });

  it('Значение расстояния изменилось', () => {
    renderFormAccordion();

    const distanceSelector = screen.getByText('астрономическое');
    expect(distanceSelector).toBeInTheDocument();

    fireEvent.mouseDown(distanceSelector);

    const option = screen.getByText('миль');
    fireEvent.click(option);

    fireEvent.change(distanceSelector, { value: 'miles' });

    expect(screen.getByText('Расстояние промаха:46603')).toBeInTheDocument();
  });
});
