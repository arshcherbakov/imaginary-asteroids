import { PropsWithChildren } from 'react';
import { Typography } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react';
import Accordion from '.';
import ICustomAccordionProps from './interface';

const StoryMeta: Meta = {
  title: 'UI/CustomAccordion',
  component: Accordion,
};

export const CustomAccordion: StoryFn<
  PropsWithChildren<ICustomAccordionProps>
> = args => <Accordion {...args} />;

CustomAccordion.args = {
  title: 'Accordion Title',
  children: (
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  ),
};

export default StoryMeta;
