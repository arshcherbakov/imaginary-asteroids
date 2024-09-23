import { useTheme, CircularProgress } from '@mui/material';
import { StyledCircularProgressWrapper } from './style';

const LoadingPage: React.FC = () => {
  const theme = useTheme();

  return (
    <StyledCircularProgressWrapper>
      <CircularProgress
        size="100px"
        sx={{
          color: theme.palette.loading.pending,
        }}
      />
    </StyledCircularProgressWrapper>
  );
};

export default LoadingPage;
