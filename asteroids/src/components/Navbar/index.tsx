import { useState, useContext } from "react";
import { Box, CssBaseline, IconButton, Container, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Context } from "../../context/context";
import MobileNavbar from "./MobileNavbar";
import ChangeThemeButton from "../UI/ChangeThemeButton";
import { NAVIGATE_TITLES, LOGO_NASA } from "../../constants";
import Nasa from "../../assets/img/nasa-logo.svg";
import {
  StyledNavbar,
  StyledAppBar,
  StyledIconButton,
  StyledLogoText,
  StyledLogoNasa,
  StyledToolbar,
  StyledWrapperMenuItem,
} from "./style";

interface INavbarProps {
  window?: () => Window;
}

const Navbar: React.FC = (props: INavbarProps) => {
  const { window } = props;

  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMode = useContext(Context);

  const [checked, setChecked] = useState<boolean>(false);

  const toggleTheme = () => {
    toggleMode();
    setChecked(!checked);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <StyledNavbar
      sx={{
        background: theme.palette.primary.main,
      }}
    >
      <Container maxWidth="xl">
        <CssBaseline />
        <StyledAppBar
          position="static"
          sx={{ background: theme.palette.primary.main }}
        >
          <StyledToolbar>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton>
                <StyledLogoNasa alt={LOGO_NASA.alt} src={Nasa} />
              </IconButton>
            </Box>

            <StyledLogoText sx={{ color: theme.palette.primary.contrastText }}>
              NASA
            </StyledLogoText>
            <StyledWrapperMenuItem>
              {NAVIGATE_TITLES.map((menuItem) => (
                <Button
                  key={menuItem.id}
                  sx={{ color: theme.palette.primary.contrastText }}
                >
                  {menuItem.title}
                </Button>
              ))}
              <ChangeThemeButton
                checked={checked}
                handlerSwitch={toggleTheme}
              />
            </StyledWrapperMenuItem>
            <StyledIconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </StyledIconButton>
          </StyledToolbar>
          <MobileNavbar
            container={container}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            checked={checked}
            handlerSwitch={toggleTheme}
          />
        </StyledAppBar>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
