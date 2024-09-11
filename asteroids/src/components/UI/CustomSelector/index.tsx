import { MenuItem } from "@mui/material";
import ICustomSelectorProps from "./interface";
import { StyledSelector } from "./style";

const CustomSelector = ({
  dataList,
  handleSelector,
  styleSelector,
  selelctorValue,
}: ICustomSelectorProps) => (
  <StyledSelector
    variant="standard"
    onChange={handleSelector}
    sx={styleSelector}
    value={selelctorValue}
  >
    {Object.keys(dataList).map((item, index) => (
      <MenuItem key={index} value={item}>
        {dataList[item]}
      </MenuItem>
    ))}
  </StyledSelector>
);

export default CustomSelector;
