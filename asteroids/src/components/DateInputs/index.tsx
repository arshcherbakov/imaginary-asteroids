import { useTheme } from '@mui/material';
import { Dayjs } from 'dayjs';
import IDateInputs from './interface';
import {
  StyledContainerDate,
  StyledWrapperDate,
  StyledDatePickerStart,
  StyledDatePickerEnd,
  StyledButtonSearch,
  StyledErrorText,
} from './style';

const DateInputs: React.FC<IDateInputs> = ({
  handleSetDate,
  dateSearch,
  handleSearchByDate,
  errorValidate,
}) => {
  const theme = useTheme();

  const styleDatePicker = {
    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
      borderColor: theme.palette.primary.dark,
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.primary.contrastText,
    },
  };

  return (
    <StyledContainerDate maxWidth="xl">
      <StyledWrapperDate>
        <StyledDatePickerStart
          label="Дата начала поиска астероидов"
          value={dateSearch.startDate}
          onChange={(date: Dayjs | null) => handleSetDate('startDate', date)}
          sx={styleDatePicker}
        />
        <StyledDatePickerEnd
          label="Дата окончания поиска астероидов"
          value={dateSearch.endDate}
          onChange={(date: Dayjs | null) => handleSetDate('endDate', date)}
          sx={styleDatePicker}
        />
        <StyledButtonSearch
          onClick={handleSearchByDate}
          sx={{
            background: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          }}
        >
          Найти
        </StyledButtonSearch>
      </StyledWrapperDate>

      <StyledErrorText>{errorValidate}</StyledErrorText>
    </StyledContainerDate>
  );
};

export default DateInputs;
