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
import { NAVIGATE_TITLES, LOGO_NASA } from "../../constants";
import Nasa from "../../assets/img/nasa-logo.svg";
import { useStyle } from "./style";

interface Props {
  window?: () => Window;
}

const Navbar: React.FC = (props: Props) => {
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
      <AppBar position="static" component="nav" sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={styles.logoButton}>
              <Avatar alt={LOGO_NASA.alt} src={Nasa} sx={styles.logoNasa} />
            </IconButton>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={styles.iconButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={styles.logoText}>
            NASA
          </Typography>
          <Box sx={styles.menuWrapper}>
            {NAVIGATE_TITLES.map((menuItem) => (
              <Button key={menuItem.id} sx={styles.menuItem}>
                {menuItem.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
        <MobileNavbar
          container={container}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </AppBar>
    </Container>
  );
};

export default Navbar;
