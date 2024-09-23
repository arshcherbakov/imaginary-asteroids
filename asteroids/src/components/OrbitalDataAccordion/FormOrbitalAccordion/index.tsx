import { Typography } from '@mui/material';
import { ORBITAL_DATA_TITLE } from '../../../constants';
import { IOrbitClass } from '../../../interfaces';
import IFormOrbitalAccordionProps from './interface';

const FormOrbitalAccordion: React.FC<IFormOrbitalAccordionProps> = ({
  index,
  orbitalData,
  field,
}) => {
  const orbitalClassKeys = Object.keys(orbitalData.orbit_class) as Array<
    keyof IOrbitClass
  >;

  return (
    <>
      {typeof orbitalData[field] !== 'object' ? (
        <Typography>
          {ORBITAL_DATA_TITLE[index]}: {orbitalData[field] as string}
        </Typography>
      ) : (
        orbitalClassKeys.map((orbitClassKey, orbitIndex) => (
          <Typography key={orbitIndex}>
            {ORBITAL_DATA_TITLE[index + orbitIndex]}:{' '}
            {orbitalData.orbit_class[orbitClassKey]}
          </Typography>
        ))
      )}
    </>
  );
};

export default FormOrbitalAccordion;
