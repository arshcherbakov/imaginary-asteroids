import { useState, FC } from 'react';
import { Typography, SelectChangeEvent, Box } from '@mui/material';
import CustomAccordion from '../../UI/CustomAccordion';
import CustomSelector from '../../UI/CustomSelector';
import {
  RELATIVE_SPEED_UNITS,
  UNITS_MEASUREMENT_SLIP_DISTANCE,
  DEFAULT_UNIT_OF_SPEED,
  DEFAULT_UNIT_OF_MISS_DISTANCE,
} from '../../../constants';
import { IApproachData } from '../../../interfaces';

interface IFormAccordion {
  data: IApproachData;
}

const FormAccordion: FC<IFormAccordion> = ({ data }) => {
  const [unitsOfSpeed, setUnitsOfSpeed] = useState<
    keyof IApproachData['relative_velocity']
  >(DEFAULT_UNIT_OF_SPEED);
  const [unitsOfMissDistance, setUnitsOfMissDistance] = useState<
    keyof IApproachData['miss_distance']
  >(DEFAULT_UNIT_OF_MISS_DISTANCE);

  const handleUnitsOfSpeed = (event: SelectChangeEvent<unknown>) => {
    setUnitsOfSpeed(
      event.target.value as keyof IApproachData['relative_velocity'],
    );
  };

  const handleUnitsOfMissDistance = (event: SelectChangeEvent<unknown>) => {
    setUnitsOfMissDistance(
      event.target.value as keyof IApproachData['miss_distance'],
    );
  };

  return (
    <CustomAccordion title={data.orbiting_body}>
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
        {data.relative_velocity[unitsOfSpeed]}
        <CustomSelector
          selelctorValue={unitsOfSpeed}
          dataList={RELATIVE_SPEED_UNITS}
          handleSelector={handleUnitsOfSpeed}
          styleSelector={{ marginLeft: '10px' }}
        />
      </Box>
      <Box>
        Расстояние промаха:
        {data.miss_distance[unitsOfMissDistance]}
        <CustomSelector
          selelctorValue={unitsOfMissDistance}
          dataList={UNITS_MEASUREMENT_SLIP_DISTANCE}
          handleSelector={handleUnitsOfMissDistance}
          styleSelector={{ marginLeft: '10px' }}
        />
      </Box>
    </CustomAccordion>
  );
};

export default FormAccordion;
