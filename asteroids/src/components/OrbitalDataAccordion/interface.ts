import { IOrbitalData } from '../../interfaces';

interface IOrbitalDataAccordion {
  orbitalData: IOrbitalData;
}

interface IFormOrbitalAccordionProps extends IOrbitalDataAccordion {
  field: keyof IOrbitalData;
}

export type { IOrbitalDataAccordion };
