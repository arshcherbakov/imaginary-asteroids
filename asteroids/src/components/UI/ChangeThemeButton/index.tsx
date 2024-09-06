import { Checkbox } from "@mui/material";
import IChangeThemeButtonProps from "./interface";
import { StyledChangeThemeButton, StyledSlider } from "./style";

const ChangeThemeButton: React.FC<IChangeThemeButtonProps> = ({
  checked,
  handlerSwitch,
}) => (
  <StyledChangeThemeButton>
    <Checkbox checked={checked} onChange={handlerSwitch} />
    <StyledSlider checked={checked} className={`round`} />
  </StyledChangeThemeButton>
);

export default ChangeThemeButton;
