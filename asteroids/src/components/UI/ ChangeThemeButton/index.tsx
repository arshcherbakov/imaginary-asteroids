import { useState } from "react";
import { Checkbox } from "@mui/material";
import { StyledChangeThemeButton, StyledSlider } from "./style";

const ChangeThemeButton: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const toggleTheme = () => {
    setChecked(!checked);
  };

  return (
    <StyledChangeThemeButton>
      <Checkbox checked={checked} onChange={toggleTheme} />
      <StyledSlider checked={checked} className={`round`} />
    </StyledChangeThemeButton>
  );
};

export default ChangeThemeButton;
