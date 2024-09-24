import { SelectChangeEvent } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { action } from '@storybook/addon-actions';
import Selector from '.';
import { DIAMETER_SIZES } from '../../../constants';
import ICustomSelectorProps from './interface';

const StoryMeta: Meta = {
  title: 'UI/CustomSelector',
  component: Selector,
};

export const CustomSelector: StoryFn<ICustomSelectorProps> = args => {
  const [argsSelector, setArgsSelector] = useArgs();

  const handleSelector = (event: SelectChangeEvent<unknown>) => {
    const newValue = event.target.value as keyof typeof DIAMETER_SIZES;

    setArgsSelector({ ...argsSelector, selelctorValue: newValue });
    action('handleSelector')(newValue);
  };

  return <Selector {...args} handleSelector={handleSelector} />;
};

CustomSelector.args = {
  selelctorValue: 'kilometers',
  dataList: DIAMETER_SIZES,
};

export default StoryMeta;
