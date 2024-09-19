import { FC } from 'react';
import { Typography } from '@mui/material';
import CustomAccordion from '../UI/CustomAccordion';
import { ORBITAL_DATA_TITLE } from '../../constants';
import { IOrbitalData, IOrbitClass } from '../../interfaces';

interface IOrbitalDataAccordion {
  orbitalData: IOrbitalData;
}

const OrbitalDataAccordion: FC<IOrbitalDataAccordion> = ({ orbitalData }) => {
  const orbitalDataKeys = Object.keys(orbitalData) as Array<keyof IOrbitalData>;
  const orbitalClassKeys = Object.keys(orbitalData.orbit_class) as Array<
    keyof IOrbitClass
  >;

  return (
    <CustomAccordion title="Орбитальные данные">
      {orbitalDataKeys.map((field, index) =>
        typeof orbitalData[field] !== 'object' ? (
          <Typography key={index}>
            {ORBITAL_DATA_TITLE[index]}: {orbitalData[field] as string}
          </Typography>
        ) : (
          orbitalClassKeys.map((orbitClassKey, orbitIndex) => (
            <Typography key={orbitIndex}>
              {ORBITAL_DATA_TITLE[index + orbitIndex]}:{' '}
              {orbitalData.orbit_class[orbitClassKey]}
            </Typography>
          ))
        ),
      )}
    </CustomAccordion>
  );
};

export default OrbitalDataAccordion;
