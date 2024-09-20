import { useState, FC, Suspense, lazy } from 'react';
import { Typography } from '@mui/material';
import SearchInput from '../../SearchInput';
import Navbar from '../../Navbar';
import LoadingPage from '../../LoadingPage';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { searchSpecificAsteroid } from '../../../store/slices/asteroidSlice';
import { RootState } from '../../../store';
import { ERRORS } from '../../../constants';
import { StyledSearchAsteroid, StyledSearchError } from './style';

const TableAsteroid = lazy(() => import('../../TableAsteroid'));
const OrbitalDataAccordion = lazy(() => import('../../OrbitalDataAccordion'));
const ApproachDataAccordion = lazy(() => import('../../ApproachDataAccordion'));

const SearchAsteroid: FC = () => {
  const dispatch = useAppDispatch();

  const { asteroid, error } = useAppSelector(
    (state: RootState) => state.asteroids,
  );

  const [dataAsteroid, setDataAsteroid] = useState<string>('');
  const [validError, setValidError] = useState<string>('');

  const handleTextFieldSearch = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDataAsteroid(event.target.value);
  };

  const handleButtonSearch = () => {
    if (!dataAsteroid.trim()) {
      setValidError(ERRORS.emptyField);
      return;
    }

    dispatch(searchSpecificAsteroid(dataAsteroid));
    setValidError('');
  };

  return (
    <>
      <Navbar />
      <StyledSearchAsteroid>
        <SearchInput
          handleTextFieldSearch={handleTextFieldSearch}
          handleButtonSearch={handleButtonSearch}
          validError={validError}
        />
        {asteroid && !error ? (
          <Suspense fallback={<LoadingPage />}>
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
          </Suspense>
        ) : (
          <StyledSearchError>{error}</StyledSearchError>
        )}
      </StyledSearchAsteroid>
    </>
  );
};

export default SearchAsteroid;
