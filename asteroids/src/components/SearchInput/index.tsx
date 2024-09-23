import { useTheme, Button } from '@mui/material';
import ISearchInputProps from './interface';
import {
  StyledSearchAsteroidWrapper,
  StyledSearchContainer,
  StyledSearchAsteroidInput,
  styleDateInput,
} from './style';

const SearchInput: React.FC<ISearchInputProps> = ({
  handleTextFieldSearch,
  handleButtonSearch,
  validError,
}) => {
  const theme = useTheme();

  return (
    <StyledSearchAsteroidWrapper>
      <StyledSearchContainer>
        <StyledSearchAsteroidInput
          error={!!validError}
          id="outlined-basic"
          label="Поиск астероида"
          variant="outlined"
          onChange={handleTextFieldSearch}
          sx={styleDateInput(theme)}
          helperText={validError}
        />
        <Button
          onClick={handleButtonSearch}
          sx={{
            height: '56px',
            color: theme.palette.primary.contrastText,
            background: theme.palette.tertiary.main,
          }}
        >
          Искать
        </Button>
      </StyledSearchContainer>
    </StyledSearchAsteroidWrapper>
  );
};

export default SearchInput;
