import { useState } from "react";
import { Box, CssBaseline, IconButton, Button, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavbar from "./MobileNavbar";
import ChangeThemeButton from "../UI/ ChangeThemeButton";
import { NAVIGATE_TITLES, LOGO_NASA } from "../../constants";
import Nasa from "../../assets/img/nasa-logo.svg";
import {
  StyledAppBar,
  StyledIconButton,
  StyledMenuItem,
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

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <StyledAppBar position="static">
        <StyledToolbar>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton>
              <StyledLogoNasa alt={LOGO_NASA.alt} src={Nasa} />
            </IconButton>
          </Box>

          <StyledLogoText>NASA</StyledLogoText>
          <StyledWrapperMenuItem>
            {NAVIGATE_TITLES.map((menuItem) => (
              <StyledMenuItem key={menuItem.id}>
                {menuItem.title}
              </StyledMenuItem>
            ))}
            <Button>
              <ChangeThemeButton />
            </Button>
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
        />
      </StyledAppBar>
    </Container>
  );
};

export default Navbar;
