import { useEffect, useState, FC } from 'react';
import { Box, useTheme } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import Navbar from '../../Navbar';
import DateInputs from '../../DateInputs';
import TableAsteroids from '../../TableAsteroids';
import SnackbarMessage from '../../SnackbarMessage';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import {
  fetchAsteroids,
  fetchAsteroidsByDate,
  pagination,
} from '../../../store/slices/asteroidSlice';
import { ERRORS, DATE_DIFFERENCE } from '../../../constants';
import { RootState } from '../../../store';
import {
  StyledBox,
  StyledWrapperContent,
  StyledStack,
  StyledPagination,
} from './style';

const AsteroidData: FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const [dateSearch, setDateSearch] = useState({
    startDate: null as Dayjs | null,
    endDate: null as Dayjs | null,
  });

  const [errorValidate, setErrorValidate] = useState<string>('');
  const [isErrorShow, setIsErrorShow] = useState<boolean>(false);
  const [isShowDatePicker, setIsShowDatePicker] = useState<boolean>(false);

  const { listAsteroids, listAllAsteroids, error } = useAppSelector(
    (state: RootState) => state.asteroids,
  );

  const countPages: number = Object.keys(listAllAsteroids).length;

  useEffect(() => {
    dispatch(fetchAsteroids());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setIsErrorShow(true);
    }
  }, [error]);

  const handlePage = (_: React.ChangeEvent<unknown>, value: number) => {
    dispatch(pagination(value));
  };

  const handleSetDate = (name: keyof typeof dateSearch, date: Dayjs | null) => {
    setDateSearch({ ...dateSearch, [name]: date });
  };

  const handleSearchByDate = () => {
    const dayStart = dayjs(dateSearch.startDate);
    const dayEnd = dayjs(dateSearch.endDate);

    if (!dayStart.isValid()) {
      setErrorValidate(ERRORS.missingStartDateField);
      return;
    }

    if (!dayEnd.isValid()) {
      setErrorValidate(ERRORS.missingEndDateField);
      return;
    }

    setErrorValidate('');

    dayEnd.diff(dayStart, 'day') > DATE_DIFFERENCE
      ? setErrorValidate(ERRORS.dateDifference)
      : dispatch(fetchAsteroidsByDate(dateSearch));

    dispatch(fetchAsteroidsByDate(dateSearch));
  };

  const handleShowDatePicker = () => {
    setIsShowDatePicker(!isShowDatePicker);
  };

  const snackbarClose = () => {
    setIsErrorShow(false);
  };

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar handleShowDatePicker={handleShowDatePicker} />
        <StyledBox theme={theme}>
          <StyledWrapperContent maxWidth="xl">
            {isShowDatePicker && (
              <DateInputs
                handleSetDate={handleSetDate}
                dateSearch={dateSearch}
                handleSearchByDate={handleSearchByDate}
                errorValidate={errorValidate}
              />
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
        <SnackbarMessage
          message={error}
          open={isErrorShow}
          snackbarClose={snackbarClose}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default AsteroidData;
