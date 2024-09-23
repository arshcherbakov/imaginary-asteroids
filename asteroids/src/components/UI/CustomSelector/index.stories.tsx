import { useState } from 'react';
import { SelectChangeEvent, Box } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react';
import CustomSelector from '.';
import ICustomSelectorProps from './interface';

const listForSelector = {
  kilometers: 'Километры',
  meters: 'Метры',
  miles: 'Мили',
  feet: 'Фут',
};

export default {
  title: 'UI/CustomSelector',
  component: CustomSelector,
} as Meta<typeof CustomSelector>;

const Template: StoryFn<ICustomSelectorProps> = args => {
  const [selelctorValue, setSelectorValue] = useState('kilometers');

  const handleSelector = (event: SelectChangeEvent<unknown>) => {
    const newValue = event.target.value as keyof typeof listForSelector;
    setSelectorValue(newValue);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CustomSelector
        {...args}
        selelctorValue={selelctorValue}
        handleSelector={handleSelector}
      />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  dataList: listForSelector,
  handleSelector: (event: SelectChangeEvent<unknown>) => {},
};
