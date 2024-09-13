import { Box, Container, Stack, Pagination } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from 'styled-components';
import BORD_SCRIN from '../../../assets/img/stars.jpg';

const StyledBox = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? `url(${BORD_SCRIN})` : '#cdcdcd',
  height: '100%',
}));

const StyledWrapperContent = styled(Container)(() => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: '40px',
}));

const StyledStack = styled(Stack)(() => ({
  displat: 'flex',
  alignItems: 'center',
  marginTop: '20px',
}));

const StyledPagination = styled(Pagination)(() => ({
  marginBottom: '20px',
}));

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

export {
  StyledBox,
  StyledWrapperContent,
  StyledStack,
  StyledPagination,
  StyledContainerDate,
  StyledWrapperDate,
  StyledDatePickerStart,
  StyledDatePickerEnd,
};
