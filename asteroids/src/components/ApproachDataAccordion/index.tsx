import { Box } from '@mui/material';
import FormAccordion from './FormAccordion';
import { IApproachData } from '../../interfaces';

interface IApproachDataAccordion {
  approachData: IApproachData[];
}

const ApproachDataAccordion: React.FC<IApproachDataAccordion> = ({
  approachData,
}) => (
  <Box marginTop="10px">
    {approachData.map((data, index) => (
      <FormAccordion key={index} data={data} />
    ))}
  </Box>
);

export default ApproachDataAccordion;
