import { useState, FC } from 'react';
import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomAccordion from '../UI/CustomAccordion';
import { IOrbitalData } from '../../interfaces';

interface IOrbitalDataAccordion {
  orbitalData: IOrbitalData;
}

const OrbitalDataAccordion: FC<IOrbitalDataAccordion> = ({ orbitalData }) => {
  console.log(Object.keys(orbitalData));
  const orbitalDataKeys = Object.keys(orbitalData) as Array<keyof IOrbitalData>;

  return (
    <CustomAccordion title="Орбитальные данные">
      {orbitalDataKeys.map((field, index) =>
        index !== 22 ? (
          <Typography>
            {' '}
            Дата определения орбиты: {orbitalData[field] as string}
          </Typography>
        ) : (
          <Typography>
            {/* Дата определения орбиты: {orbitalData[field].orbit_class} */}
          </Typography>
        ),
      )}
    </CustomAccordion>
  );
};

export default OrbitalDataAccordion;
