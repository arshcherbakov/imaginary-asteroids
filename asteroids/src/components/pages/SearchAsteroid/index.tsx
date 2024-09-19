import { useState, FC } from 'react';
import { useTheme, Box, Typography } from '@mui/material';
import SearchInput from '../../SearchInput';
import OrbitalDataAccordion from '../../OrbitalDataAccordion';
import TableAsteroid from '../../TableAsteroid';
import ApproachDataAccordion from '../../ApproachDataAccordion';
import Navbar from '../../Navbar';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { searchSpecificAsteroid } from '../../../store/slices/asteroidSlice';
import { RootState } from '../../../store';
import { StyledSearchAsteroid } from './style';

const SearchAsteroid: FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const { asteroid, error } = useAppSelector(
    (state: RootState) => state.asteroids,
  );

  const [dataAsteroid, setDataAsteroid] = useState<string>('');

  const handleTextFieldSearch = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDataAsteroid(event.target.value);
  };

  const handleButtonSearch = () => {
    dispatch(searchSpecificAsteroid(dataAsteroid));
    // console.log(getSpecificAsteroid(dataAsteroid));
  };

  return (
    <>
      <Navbar />
      <StyledSearchAsteroid>
        <SearchInput
          handleTextFieldSearch={handleTextFieldSearch}
          handleButtonSearch={handleButtonSearch}
        />
        {asteroid && (
          <>
            <TableAsteroid asteroid={asteroid} />
            <OrbitalDataAccordion orbitalData={asteroid.orbital_data} />
            <Typography sx={{ marginTop: 5 }}>
              Данные близкого сближения
            </Typography>
            <ApproachDataAccordion
              approachData={asteroid.close_approach_data}
            />
          </>
        )}
      </StyledSearchAsteroid>
    </>
  );
};

export default SearchAsteroid;
