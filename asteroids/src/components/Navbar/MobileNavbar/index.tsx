import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { NAVIGATE_TITLES } from "../../../constants";
import IMobileNavbar from "./interface";
import {
  StyledMobileNavbar,
  StyledMobileMenuCenter,
  StyledMobileListCenter,
} from "./style";

const MobileNavbar: React.FC<IMobileNavbar> = ({
  container,
  mobileOpen,
  handleDrawerToggle,
}) => (
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

export default MobileNavbar;
