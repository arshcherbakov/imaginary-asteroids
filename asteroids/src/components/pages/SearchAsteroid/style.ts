import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledSearchAsteroid = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const StyledSearchError = styled(Typography)(() => ({
  textAlign: 'center',
  marginTop: '120px',
}));

export { StyledSearchAsteroid, StyledSearchError };
