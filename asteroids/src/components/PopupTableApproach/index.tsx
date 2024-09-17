import { useState, FC } from 'react';
import { TableCell, SelectChangeEvent } from '@mui/material';
import CustomPopupTable from '../UI/CustomPopupTable';
import CustomSelector from '../UI/CustomSelector';
import {
  TITLE_TABLE_ASTEROIDS,
  RELATIVE_SPEED_UNITS,
  UNITS_MEASUREMENT_SLIP_DISTANCE,
} from '../../constants';
import { IAsteroid } from '../../interfaces';
import IPopupTableApproach from './interface';
import { StyledTableApproachCell } from './style';

const PopupTableApproach: FC<IPopupTableApproach> = ({ open, asteroid }) => {
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
    <CustomPopupTable
      titleTable="Данные сближения"
      listTitlesTable={TITLE_TABLE_ASTEROIDS.slice(5, 11)}
      open={open}
    >
      {(
        Object.keys(asteroid.close_approach_data[0]) as Array<
          keyof (typeof asteroid.close_approach_data)[0]
        >
      ).map(
        (field, index) =>
          !(asteroid.close_approach_data[0][field] instanceof Object) && (
            <TableCell key={index} component="th" scope="row" align="center">
              {asteroid.close_approach_data[0][field] as string}
            </TableCell>
          ),
      )}
      <StyledTableApproachCell component="th" scope="row" align="center">
        {
          asteroid.close_approach_data[0].relative_velocity[
            unitsOfSpeed as keyof IAsteroid['close_approach_data'][0]['relative_velocity']
          ] as string
        }
        <CustomSelector
          selelctorValue={unitsOfSpeed}
          dataList={RELATIVE_SPEED_UNITS}
          handleSelector={handleUnitsOfSpeed}
          styleSelector={{ marginLeft: '10px' }}
        />
      </StyledTableApproachCell>
      <TableCell component="th" scope="row" align="center">
        {
          asteroid.close_approach_data[0].miss_distance[
            unitsOfMissDistance as keyof IAsteroid['close_approach_data'][0]['miss_distance']
          ] as string
        }
        <CustomSelector
          selelctorValue={unitsOfMissDistance}
          dataList={UNITS_MEASUREMENT_SLIP_DISTANCE}
          handleSelector={handleUnitsOfMissDistance}
          styleSelector={{ marginLeft: '10px' }}
        />
      </TableCell>
    </CustomPopupTable>
  );
};

export default PopupTableApproach;
