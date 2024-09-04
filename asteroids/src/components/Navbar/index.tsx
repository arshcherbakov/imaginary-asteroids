import { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavbar from "./MobileNavbar";
import ChangeThemeButton from "../UI/ ChangeThemeButton";
import { NAVIGATE_TITLES, LOGO_NASA } from "../../constants";
import Nasa from "../../assets/img/nasa-logo.svg";
import { useStyle } from "./style";
import styled from "styled-components";

interface INavbarProps {
  window?: () => Window;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent !important",
  height: 100,
  justifyContent: "center",
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: "20px",
  display: `${{ xs: "none", sm: "inline-flex" }}`,
}));

const StyledMenuItem = styled(Button)(() => ({
  color: "#fff !important",
}));

const StyledLogoText = styled(Box)(() => ({
  flexGrow: 1,
}));

const StyledLogoNasa = styled(Avatar)(({ theme }) => ({
  width: "60px  !important",
  height: "60px  !important",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
}));

const Navbar: React.FC = (props: INavbarProps) => {
  const { window } = props;

  const styles = useStyle();

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
            <StyledIconButton>
              <StyledLogoNasa alt={LOGO_NASA.alt} src={Nasa} />
            </StyledIconButton>
          </Box>

          <StyledLogoText
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            NASA
          </StyledLogoText>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            {NAVIGATE_TITLES.map((menuItem) => (
              <StyledMenuItem key={menuItem.id}>
                {menuItem.title}
              </StyledMenuItem>
            ))}
            <Button>
              <ChangeThemeButton />
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
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
