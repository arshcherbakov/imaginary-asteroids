import { useState, FC } from 'react';
import {
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  SelectChangeEvent,
  Table,
  Link,
  useTheme,
  Typography,
} from '@mui/material';
import CustomSelector from '../UI/CustomSelector';
import convertBooleanToAnswer from '../../helpers/convert-boolean-to-answer';
import { TITLE_TABLE_ASTEROIDS, DIAMETER_SIZES } from '../../constants';
import { IAsteroid } from '../../interfaces';

const styleTableCellWithSelector = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

interface ITableAsteroid {
  asteroid: IAsteroid | null;
}

const TableAsteroid: FC<ITableAsteroid> = ({ asteroid }) => {
  const theme = useTheme();

  const [quantity, setQuantity] =
    useState<keyof IAsteroid['estimated_diameter']>('kilometers');

  const handleQuantity = (event: SelectChangeEvent<unknown>) => {
    setQuantity(event.target.value as keyof IAsteroid['estimated_diameter']);
  };

  return (
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          {TITLE_TABLE_ASTEROIDS.slice(0, 5).map((title, index) => (
            <TableCell
              align="center"
              key={index}
              sx={index === 3 ? styleTableCellWithSelector : {}}
            >
              {title.titleTable}
              {index === 3 && (
                <CustomSelector
                  selelctorValue={quantity}
                  dataList={DIAMETER_SIZES}
                  handleSelector={handleQuantity}
                />
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow key={asteroid?.id}>
          {TITLE_TABLE_ASTEROIDS.slice(0, 3).map((title, index) => (
            <TableCell key={index} component="th" scope="row" align="center">
              {index === 0 && (
                <Link
                  href={asteroid?.nasa_jpl_url}
                  sx={{ color: theme.palette.primary.contrastText }}
                >
                  {asteroid &&
                    (asteroid[title.fieldName as keyof IAsteroid] as string)}
                </Link>
              )}
              {index === 2 &&
                asteroid &&
                convertBooleanToAnswer(
                  asteroid[title.fieldName as keyof IAsteroid] as boolean,
                )}
              {index !== 0 && index !== 2 && (
                <>
                  {asteroid &&
                    (asteroid[title.fieldName as keyof IAsteroid] as string)}
                </>
              )}
            </TableCell>
          ))}
          <TableCell component="th" scope="row" align="center">
            <Typography>
              Min:
              {asteroid?.estimated_diameter[quantity].estimated_diameter_min}
            </Typography>
            <Typography>
              Max:
              {asteroid?.estimated_diameter[quantity].estimated_diameter_max}
            </Typography>
          </TableCell>
          <TableCell component="th" scope="row" align="center">
            {convertBooleanToAnswer(asteroid?.is_sentry_object || false)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableAsteroid;
