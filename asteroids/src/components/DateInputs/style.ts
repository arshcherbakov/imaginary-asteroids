import { Box, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from 'styled-components';

const StyledContainerDate = styled(Box)(() => ({
  display: 'flex',
  height: '100px',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

const StyledWrapperDate = styled(Box)(() => ({
  width: '55%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
}));

const StyledDatePickerStart = styled(DatePicker)(() => ({
  width: '310px',
}));

const StyledDatePickerEnd = styled(DatePicker)(() => ({
  width: '325px',
}));

const StyledButtonSearch = styled(Button)(() => ({
  width: '100px',
  height: '40px',
}));

export {
  StyledContainerDate,
  StyledWrapperDate,
  StyledDatePickerStart,
  StyledDatePickerEnd,
  StyledButtonSearch,
};
