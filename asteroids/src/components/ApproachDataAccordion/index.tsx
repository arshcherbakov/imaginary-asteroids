import { useState, FC } from 'react';
import { Typography, SelectChangeEvent, Box } from '@mui/material';
import CustomAccordion from '../UI/CustomAccordion';
import CustomSelector from '../UI/CustomSelector';
import {
  RELATIVE_SPEED_UNITS,
  UNITS_MEASUREMENT_SLIP_DISTANCE,
  DEFAULT_UNIT_OF_SPEED,
  DEFAULT_UNIT_OF_MISS_DISTANCE,
} from '../../constants';
import { IAsteroid, IApproachData } from '../../interfaces';

interface IApproachDataAccordion {
  approachData: IApproachData[];
}

const ApproachDataAccordion: FC<IApproachDataAccordion> = ({
  approachData,
}) => {
  const [unitsOfSpeed, setUnitsOfSpeed] = useState<Record<string, string>>({});
  const [unitsOfMissDistance, setUnitsOfMissDistance] = useState<
    Record<string, string>
  >({});

  const handleUnitsOfSpeed = (
    event: SelectChangeEvent<unknown>,
    id: number,
  ) => {
    setUnitsOfSpeed({
      ...unitsOfSpeed,
      [id.toString()]: event.target
        .value as keyof IAsteroid['close_approach_data'][0]['relative_velocity'],
    });
  };

  const handleUnitsOfMissDistance = (
    event: SelectChangeEvent<unknown>,
    id: number,
  ) => {
    setUnitsOfMissDistance({
      ...unitsOfMissDistance,
      [id.toString()]: event.target
        .value as keyof IAsteroid['close_approach_data'][0]['miss_distance'],
    });
  };

  return (
    <Box marginTop="10px">
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
                (unitsOfSpeed[
                  index
                ] as keyof IAsteroid['close_approach_data'][0]['relative_velocity']) ||
                  DEFAULT_UNIT_OF_SPEED
              ]
            }
            <CustomSelector
              selelctorValue={unitsOfSpeed[index] || DEFAULT_UNIT_OF_SPEED}
              dataList={RELATIVE_SPEED_UNITS}
              handleSelector={event => handleUnitsOfSpeed(event, index)}
              styleSelector={{ marginLeft: '10px' }}
            />
          </Box>
          <Box>
            Расстояние промаха:
            {
              data.miss_distance[
                (unitsOfMissDistance[
                  index
                ] as keyof IAsteroid['close_approach_data'][0]['miss_distance']) ||
                  DEFAULT_UNIT_OF_MISS_DISTANCE
              ] as string
            }
            <CustomSelector
              selelctorValue={
                unitsOfMissDistance[index] || DEFAULT_UNIT_OF_MISS_DISTANCE
              }
              dataList={UNITS_MEASUREMENT_SLIP_DISTANCE}
              handleSelector={event => handleUnitsOfMissDistance(event, index)}
              styleSelector={{ marginLeft: '10px' }}
            />
          </Box>
        </CustomAccordion>
      ))}
    </Box>
  );
};

export default ApproachDataAccordion;
