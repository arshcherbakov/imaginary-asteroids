import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomPopupTable from '.';

const mockTitlePopupTable: string = 'Table title';
const mockChildrenPopupTable: string = 'Content children';
const mockListTitlesTable = [
  {
    titleTable: 'Название',
    fieldName: 'name',
  },
  {
    titleTable: 'Абсолютная величина h',
    fieldName: 'absolute_magnitude_h',
  },
  {
    titleTable: 'Опасный',
    fieldName: 'is_potentially_hazardous_asteroid',
  },
];

const renderCustomPopupTable = (isOpen: boolean) =>
  render(
    <CustomPopupTable
      titleTable={mockTitlePopupTable}
      open={isOpen}
      listTitlesTable={mockListTitlesTable}
    >
      <td>{mockChildrenPopupTable}</td>
    </CustomPopupTable>,
  );

describe('component CustomPopupTable', () => {
  it('Отображение CustomPopupTable', () => {
    renderCustomPopupTable(true);

    const titilePopupTable = screen.getByText(mockTitlePopupTable);

    expect(titilePopupTable).toBeInTheDocument();
  });

  it('Таблица не отображается, при open = false', () => {
    renderCustomPopupTable(false);

    const titilePopupTable = screen.queryByText(mockTitlePopupTable);

    expect(titilePopupTable).not.toBeInTheDocument();
  });

  it('Отображение заголовок колонок', () => {
    renderCustomPopupTable(true);

    mockListTitlesTable.map(title => {
      expect(screen.getByText(title.titleTable)).toBeInTheDocument();
    });
  });

  it('Отображение дочерних элементов', () => {
    renderCustomPopupTable(true);

    const childrenPopupTable = screen.getByText(mockChildrenPopupTable);

    expect(childrenPopupTable).toBeInTheDocument();
  });
});
