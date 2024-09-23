import FormOrbitalAccordion from './FormOrbitalAccordion';
import CustomAccordion from '../UI/CustomAccordion';
import { IOrbitalData } from '../../interfaces';
import { IOrbitalDataAccordion } from './interface';

const OrbitalDataAccordion: React.FC<IOrbitalDataAccordion> = ({
  orbitalData,
}) => {
  const orbitalDataKeys = Object.keys(orbitalData) as Array<keyof IOrbitalData>;

  return (
    <CustomAccordion title="Орбитальные данные">
      {orbitalDataKeys.map((field, index) => (
        <FormOrbitalAccordion
          key={index}
          index={index}
          orbitalData={orbitalData}
          field={field}
        />
      ))}
    </CustomAccordion>
  );
};

export default OrbitalDataAccordion;
