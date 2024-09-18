import { useState, FC } from 'react';
import {
  useTheme,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomSelector from '../UI/CustomSelector';
import { IOrbitalData } from '../../interfaces';

interface IOrbitalDataAccordion {
  orbitalData: IOrbitalData;
}

const OrbitalDataAccordion: FC<IOrbitalDataAccordion> = ({ orbitalData }) => {
  console.log(Object.keys(orbitalData));
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        Орбитальные данные
      </AccordionSummary>
      <AccordionDetails>
        {/* {orbitalData &&
          Object.keys(orbitalData).map((field, index) =>
            index !== 22 ? (
              <Typography>
                {' '}
                Дата определения орбиты:{' '}
                {orbitalData[field as keyof IOrbitalData] as string}
              </Typography>
            ) : (
              <CustomSelector />
            ),
          )} */}
      </AccordionDetails>
    </Accordion>
  );
};

export default OrbitalDataAccordion;
