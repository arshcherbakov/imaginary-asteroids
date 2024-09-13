import { useEffect, useState, FC } from 'react';
import { Box, Button, Container, useTheme } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import Navbar from '../../Navbar';
import TableAsteroids from '../../TableAsteroids';
import { RootState } from '../../../store';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import {
  fetchAsteroids,
  fetchAsteroidsByDate,
  pagination,
} from '../../../store/slices/asteroidSlice';
import {
  StyledBox,
  StyledWrapperContent,
  StyledStack,
  StyledPagination,
  StyledContainerDate,
  StyledWrapperDate,
  StyledDatePickerStart,
  StyledDatePickerEnd,
} from './style';

const AsteroidData: FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const styleDatePicker = {
    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
      borderColor: theme.palette.primary.dark,
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.primary.contrastText,
    },
  };

  const [dateSearch, setDateSearch] = useState({
    startDate: null as Dayjs | null,
    endDate: null as Dayjs | null,
  });

  const [isShowDatePicker, setIsShowDatePicker] = useState<boolean>(false);

  const { listAsteroids, listAllAsteroids } = useAppSelector(
    (state: RootState) => state.asteroids,
  );

  const countPages: number = Object.keys(listAllAsteroids).length;

  useEffect(() => {
    // dispatch(fetchAsteroids());
  }, []);

  const handlePage = (_: React.ChangeEvent<unknown>, value: number) => {
    dispatch(pagination(value));
  };

  const handleSetDate = (name: keyof typeof dateSearch, date: Dayjs | null) => {
    setDateSearch({ ...dateSearch, [name]: date });
  };

  const handleSearchByDate = () => {
    dispatch(fetchAsteroidsByDate(dateSearch));
  };

  const handleShowDatePicker = () => {
    setIsShowDatePicker(!isShowDatePicker);
  };

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar handleShowDatePicker={handleShowDatePicker} />
        <StyledBox theme={theme}>
          <StyledWrapperContent maxWidth="xl">
            {isShowDatePicker && (
              <StyledContainerDate maxWidth="xl">
                <StyledWrapperDate>
                  <StyledDatePickerStart
                    label="Дата начала поиска астероидов"
                    value={dateSearch.startDate}
                    onChange={date => handleSetDate('startDate', date)}
                    sx={styleDatePicker}
                  />
                  <StyledDatePickerEnd
                    label="Дата окончания поиска астероидов"
                    value={dateSearch.endDate}
                    onChange={date => handleSetDate('endDate', date)}
                    sx={styleDatePicker}
                  />
                  <Button
                    onClick={handleSearchByDate}
                    sx={{
                      background: theme.palette.primary.light,
                      color: theme.palette.primary.contrastText,
                      width: '100px',
                      height: '40px',
                    }}
                  >
                    Найти
                  </Button>
                </StyledWrapperDate>
              </StyledContainerDate>
            )}
            <TableAsteroids
              titleTable="Asteroid data"
              listData={listAsteroids}
            />
            <StyledStack>
              <StyledPagination
                count={countPages}
                variant="outlined"
                shape="rounded"
                onChange={handlePage}
              />
            </StyledStack>
          </StyledWrapperContent>
        </StyledBox>
      </LocalizationProvider>
    </Box>
  );
};

export default AsteroidData;
