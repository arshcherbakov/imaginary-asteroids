import { Meta, StoryFn } from '@storybook/react';
import { Box } from '@mui/material';
import { useArgs } from '@storybook/client-api';
import { action } from '@storybook/addon-actions';
import SwitchTheme from '.';
import IChangeThemeButtonProps from './interface';

const StoryMeta: Meta = {
  title: 'UI/ChangeThemeButton',
  component: SwitchTheme,
};

export const ChangeThemeButton: StoryFn<IChangeThemeButtonProps> = args => {
  const [argsChecked, setArgsChecked] = useArgs();

  const handlerSwitch = () => {
    setArgsChecked({ checked: !argsChecked.checked });
    action('handlerSwitch')(argsChecked);
  };

  return (
    <SwitchTheme checked={argsChecked.checked} handlerSwitch={handlerSwitch} />
  );
};

ChangeThemeButton.args = {
  checked: false,
};

export default StoryMeta;
