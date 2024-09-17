import { useState, FC } from 'react';
import {
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableContainer,
  SelectChangeEvent,
  Table,
  Link,
  useTheme,
  Typography,
  Box,
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { searchSpecificAsteroid } from '../../store/slices/asteroidSlice';
import { RootState } from '../../store';
import { getSpecificAsteroid } from '../../services';
import { TITLE_TABLE_ASTEROIDS, DIAMETER_SIZES } from '../../constants';

const InputSearchAsteroid: FC = () => {
  const dispatch = useAppDispatch();

  // const { listAsteroids, listAllAsteroids, error } = useAppSelector(
  //   (state: RootState) => state.asteroids,
  // );

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
    <Box>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={handleTextFieldSearch}
      />
      <Button onClick={handleButtonSearch}>Искать</Button>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default InputSearchAsteroid;
