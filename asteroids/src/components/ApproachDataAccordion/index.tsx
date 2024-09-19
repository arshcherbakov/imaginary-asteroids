import { useState, FC } from 'react';
import { Typography, SelectChangeEvent, Box } from '@mui/material';
import CustomAccordion from '../UI/CustomAccordion';
import CustomSelector from '../UI/CustomSelector';
import {
  RELATIVE_SPEED_UNITS,
  UNITS_MEASUREMENT_SLIP_DISTANCE,
} from '../../constants';
import { IAsteroid, IApproachData } from '../../interfaces';

interface IApproachDataAccordion {
  approachData: IApproachData[];
}

const ApproachDataAccordion: FC<IApproachDataAccordion> = ({
  approachData,
}) => {
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
    <>
      {approachData.map((data, index) => (
        <CustomAccordion key={index} title={data.orbiting_body}>
          <Typography>
            Ближайшая дата сближения: {data.close_approach_date}
          </Typography>
          <Typography>
            Полная дата сближения: {data.close_approach_date_full}
          </Typography>
          <Typography>
            Эпоха, дата сближения: {data.epoch_date_close_approach}
          </Typography>
          <Box>
            Относительная скорость:
            {
              data.relative_velocity[
                unitsOfSpeed as keyof IAsteroid['close_approach_data'][0]['relative_velocity']
              ] as string
            }
            <CustomSelector
              selelctorValue={unitsOfSpeed}
              dataList={RELATIVE_SPEED_UNITS}
              handleSelector={handleUnitsOfSpeed}
              styleSelector={{ marginLeft: '10px' }}
            />
          </Box>
          <Box>
            Расстояние промаха:
            {
              data.miss_distance[
                unitsOfMissDistance as keyof IAsteroid['close_approach_data'][0]['miss_distance']
              ] as string
            }
            <CustomSelector
              selelctorValue={unitsOfMissDistance}
              dataList={UNITS_MEASUREMENT_SLIP_DISTANCE}
              handleSelector={handleUnitsOfMissDistance}
              styleSelector={{ marginLeft: '10px' }}
            />
          </Box>
        </CustomAccordion>
      ))}
    </>
  );
};

export default ApproachDataAccordion;
