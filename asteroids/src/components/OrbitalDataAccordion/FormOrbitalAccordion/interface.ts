import { IOrbitalData } from '../../../interfaces';
import { IOrbitalDataAccordion } from '../interface';

interface IFormOrbitalAccordionProps extends IOrbitalDataAccordion {
  index: number;
  field: keyof IOrbitalData;
}

export default IFormOrbitalAccordionProps;
