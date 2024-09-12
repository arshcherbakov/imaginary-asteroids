import { SelectChangeEvent, SxProps } from "@mui/material";

interface ICustomSelectorProps {
  dataList: Record<string, string>;
  styleSelector?: SxProps;
  selelctorValue: string;
  handleSelector: (event: SelectChangeEvent<unknown>) => void;
}

export default ICustomSelectorProps;
