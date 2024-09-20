import { Box, SxProps, TextField, Theme } from '@mui/material';
import styled from 'styled-components';

const StyledSearchAsteroidWrapper = styled(Box)(() => ({
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
}));

const StyledSearchContainer = styled(Box)(() => ({
  minWidth: '400px',
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledSearchAsteroidInput = styled(TextField)(() => ({
  width: 300,
}));

const styleDateInput = (theme: Theme): SxProps<Theme> => ({
  '& .MuiOutlinedInput-root.Mui-focused fieldset': {
    borderColor: theme.palette.border.main,
  },

  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.contrastText,
  },
});

export {
  StyledSearchAsteroidWrapper,
  StyledSearchContainer,
  StyledSearchAsteroidInput,
  styleDateInput,
};
