import { FC, useState } from 'react';
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Box,
  SelectChangeEvent,
} from '@mui/material';
import CustomSelector from '../UI/CustomSelector';
import {
  TITLE_TABLE_ASTEROIDS,
  RELATIVE_SPEED_UNITS,
  UNITS_MEASUREMENT_SLIP_DISTANCE,
} from '../../constants';
import { IAsteroid } from '../../interfaces';

interface ICardAsteroid {
  approachData: {
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    relative_velocity: {
      kilometers_per_second: string;
      kilometers_per_hour: string;
      miles_per_hour: string;
    };
    miss_distance: {
      astronomical: string;
      lunar: string;
      kilometers: string;
      miles: string;
    };
    orbiting_body: string;
  };
}

const CardAsteroid: FC<ICardAsteroid> = ({ approachData }) => {
  const [unitsOfSpeed, setUnitsOfSpeed] = useState<
    keyof IAsteroid['close_approach_data'][0]['relative_velocity']
  >('kilometers_per_second');

  const [unitsOfMissDistance, setUnitsOfMissDistance] =
    useState<keyof IAsteroid['close_approach_data'][0]['miss_distance']>(
      'astronomical',
    );

  const handleUnitsOfSpeed = (event: SelectChangeEvent<unknown>) => {
    setUnitsOfSpeed(
      event.target
        .value as keyof IAsteroid['close_approach_data'][0]['relative_velocity'],
    );
  };

  const handleUnitsOfMissDistance = (event: SelectChangeEvent<unknown>) => {
    setUnitsOfMissDistance(
      event.target
        .value as keyof IAsteroid['close_approach_data'][0]['miss_distance'],
    );
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {approachData.orbiting_body}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {approachData.close_approach_date}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {approachData.close_approach_date_full}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {approachData.epoch_date_close_approach}
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {
              approachData.relative_velocity[
                unitsOfSpeed as keyof IAsteroid['close_approach_data'][0]['relative_velocity']
              ] as string
            }
          </Typography>
          <CustomSelector
            dataList={RELATIVE_SPEED_UNITS}
            selelctorValue={unitsOfSpeed}
            handleSelector={handleUnitsOfSpeed}
          />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {
              approachData.miss_distance[
                unitsOfMissDistance as keyof IAsteroid['close_approach_data'][0]['miss_distance']
              ] as string
            }
          </Typography>
          <CustomSelector
            selelctorValue={unitsOfMissDistance}
            dataList={UNITS_MEASUREMENT_SLIP_DISTANCE}
            handleSelector={handleUnitsOfMissDistance}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardAsteroid;
