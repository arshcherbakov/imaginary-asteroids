import { useState, FC } from 'react';
import {
  useTheme,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grow,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid2';
import OrbitalDataAccordion from '../../OrbitalDataAccordion';
import TableAsteroid from '../../TableAsteroid';
import CardAsteroid from '../../CardAsteroid';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { searchSpecificAsteroid } from '../../../store/slices/asteroidSlice';
import { RootState } from '../../../store';
import { getSpecificAsteroid } from '../../../services';
import { TITLE_TABLE_ASTEROIDS, DIAMETER_SIZES } from '../../../constants';
import {
  StyledSearchAsteroid,
  StyledSearchAsteroidWrapper,
  StyledSearchAsteroidInput,
  StyledSearchAsteroidButton,
  StyledWrapperContainer,
  StyledContainerCard,
} from './style';

const SearchAsteroid: FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const { asteroid, error, loading } = useAppSelector(
    (state: RootState) => state.asteroids,
  );

  const [dataAsteroid, setDataAsteroid] = useState<string>('');

  const [checked, setChecked] = useState(false);

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
    <StyledSearchAsteroid>
      <StyledSearchAsteroidWrapper>
        <Box
          sx={{
            width: '30%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <StyledSearchAsteroidInput
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={handleTextFieldSearch}
          />
          <StyledSearchAsteroidButton
            onClick={handleButtonSearch}
            sx={{ background: theme.palette.primary.light }}
          >
            Искать
          </StyledSearchAsteroidButton>
        </Box>
      </StyledSearchAsteroidWrapper>
      {asteroid && !loading && (
        <Grow in={!loading} {...(loading ? { timeout: 1000 } : {})}>
          <>
            <TableAsteroid asteroid={asteroid} />
            <OrbitalDataAccordion orbitalData={asteroid.orbital_data} />
            <Typography sx={{ marginTop: 5 }}>
              данные близкого сближения
            </Typography>
          </>
        </Grow>
      )}
      {/* <StyledWrapperContainer
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        columns={12}
      >
        {asteroid?.close_approach_data.map(approachDate => (
          <StyledContainerCard size={3}>
            <CardAsteroid approachData={approachDate} />
          </StyledContainerCard>
        ))}
      </StyledWrapperContainer> */}
    </StyledSearchAsteroid>
  );
};

export default SearchAsteroid;
