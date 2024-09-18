import { Box, Button, Grid2, TextField } from '@mui/material';
import styled from 'styled-components';

const StyledSearchAsteroid = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const StyledSearchAsteroidWrapper = styled(Box)(() => ({
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
}));

const StyledSearchAsteroidInput = styled(TextField)(() => ({
  width: 300,
}));

const StyledSearchAsteroidButton = styled(Button)(() => ({}));

const StyledWrapperContainer = styled(Grid2)(() => ({}));

const StyledContainerCard = styled(Grid2)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

export {
  StyledSearchAsteroid,
  StyledSearchAsteroidWrapper,
  StyledSearchAsteroidInput,
  StyledSearchAsteroidButton,
  StyledWrapperContainer,
  StyledContainerCard,
};
