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

const MobileNavbar: React.FC<IMobileNavbar> = ({
  container,
  mobileOpen,
  handleDrawerToggle,
}) => {
  const styles = useStyle();

  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={styles.mobileDrawer}
      >
        <Box onClick={handleDrawerToggle} sx={styles.mobileMenuCenter}>
          <Typography variant="h6" sx={{ my: 2 }}>
            NASA
          </Typography>
          <Divider />
          <List>
            {NAVIGATE_TITLES.map((menuItem) => (
              <ListItem key={menuItem.id} disablePadding>
                <ListItemButton sx={styles.mobileMenuCenter}>
                  <ListItemText primary={menuItem.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default MobileNavbar;
