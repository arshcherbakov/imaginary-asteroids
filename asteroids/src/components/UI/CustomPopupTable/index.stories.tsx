import { PropsWithChildren } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PopupTable from '.';
import { TITLE_TABLE_ASTEROIDS } from '../../../constants';
import { ITitleTableAsteroids } from '../../../interfaces';
import ICustomPopupTable from './interface';

const StoryMeta: Meta = {
  title: 'UI/CustomPopupTable',
  component: PopupTable,
};

export const CustomPopupTable: StoryFn<
  PropsWithChildren<ICustomPopupTable<ITitleTableAsteroids>>
> = args => <PopupTable {...args} />;

CustomPopupTable.args = {
  titleTable: 'Title Table',
  open: true,
  listTitlesTable: TITLE_TABLE_ASTEROIDS.slice(5, 11),
};

export default StoryMeta;
