import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Drawer,
} from "@mui/material";
import { NAVIGATE_TITLES } from "../../../constants";
import IMobileNavbar from "./interface";
import { useStyle } from "../style";
import styled from "styled-components";

const StyledMobileNavbar = styled(Drawer)(({ theme }) => ({
  display: `${{ xs: "block", sm: "none" }}`,
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: "240px",
  },
}));

const StyledMobileMenuCenter = styled(Box)(() => ({
  textAlign: "center",
}));

const StyledMobileListCenter = styled(ListItemButton)(() => ({
  textAlign: "center",
}));

const MobileNavbar: React.FC<IMobileNavbar> = ({
  container,
  mobileOpen,
  handleDrawerToggle,
}) => {
  const styles = useStyle();

  return (
    <nav>
      <StyledMobileNavbar
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledMobileMenuCenter onClick={handleDrawerToggle}>
          <Typography variant="h6" sx={{ my: 2 }}>
            NASA
          </Typography>
          <Divider />
          <List>
            {NAVIGATE_TITLES.map((menuItem) => (
              <ListItem key={menuItem.id} disablePadding>
                <StyledMobileListCenter>
                  <ListItemText primary={menuItem.title} />
                </StyledMobileListCenter>
              </ListItem>
            ))}
          </List>
        </StyledMobileMenuCenter>
      </StyledMobileNavbar>
    </nav>
  );
};

export default MobileNavbar;
