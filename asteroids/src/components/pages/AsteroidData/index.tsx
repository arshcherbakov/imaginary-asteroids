import { useEffect, useState, FC } from 'react';
import { Box, useTheme } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import Navbar from '../../Navbar';
import DateInputs from '../../DateInputs';
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
} from './style';

const AsteroidData: FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

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
    dispatch(fetchAsteroids());
  }, [dispatch]);

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
              <DateInputs
                handleSetDate={handleSetDate}
                dateSearch={dateSearch}
                handleSearchByDate={handleSearchByDate}
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
      </LocalizationProvider>
    </Box>
  );
};

export default AsteroidData;
