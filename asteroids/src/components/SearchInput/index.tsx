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
}) => {
  const theme = useTheme();

  return (
    <StyledSearchAsteroidWrapper>
      <StyledSearchContainer>
        <StyledSearchAsteroidInput
          id="outlined-basic"
          label="Поиск астероида"
          variant="outlined"
          onChange={handleTextFieldSearch}
          sx={styleDateInput(theme)}
        />
        <Button
          onClick={handleButtonSearch}
          sx={{
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
