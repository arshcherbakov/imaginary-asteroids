import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomSelector from '.';
import {
  RELATIVE_SPEED_UNITS,
  DEFAULT_UNIT_OF_SPEED,
} from '../../../constants';

type keyDataListType = keyof typeof mockDataList;

const mockhandleSelector = jest.fn();
const mockDataList = RELATIVE_SPEED_UNITS;
const mockSelectorValue = DEFAULT_UNIT_OF_SPEED;

const renderCustomSelector = () =>
  render(
    <CustomSelector
      dataList={mockDataList}
      handleSelector={mockhandleSelector}
      selelctorValue={mockSelectorValue}
    />,
  );

describe('component CustomSelector', () => {
  it('', () => {
    //   renderCustomSelector();
    //   // const selector = screen.getByRole('combobox');
    //   // fireEvent.click(selector);
    //   const menuItems = screen.getAllByRole('MenuItem');
    //   // expect(selector).toBeVisible();
    //   Object.keys(mockDataList).map((item, index) =>
    //     expect(menuItems[index]).toHaveTextContent(
    //       mockDataList[item as keyDataListType] as string,
    //     ),
    //   );
    // });
    // it('sets the correct value for the selector', () => {
    //   renderCustomSelector();
    //   // const selector = screen.getByRole('combobox');
    //   // fireEvent.change(selector, { value: 'kilometers_per_hour' });
    //   // expect(selector).toHaveValue('kilometers_per_hour');
    //   const selector = screen.getByRole('combobox');
    //   console.log(selector);
    //   // Проверяем, что значение установлено правильно
    //   expect(selector).toHaveValue(mockSelectorValue);
  });
});
