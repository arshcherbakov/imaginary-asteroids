import { Box, ListItemButton, Drawer } from "@mui/material";
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

export { StyledMobileNavbar, StyledMobileMenuCenter, StyledMobileListCenter };
