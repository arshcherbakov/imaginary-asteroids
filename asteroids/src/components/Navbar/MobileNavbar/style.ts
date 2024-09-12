import { Box, ListItemButton, Drawer } from "@mui/material";
import styled from "styled-components";

const StyledMobileNavbar = styled(Drawer)(() => ({
  "&.MuiDrawer-root": {
    display: "none",
  },

  "@media (max-width: 670px)": {
    "&.MuiDrawer-root": {
      display: "block",
    },
  },

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

const StyledMobileMenuHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "16px",
  paddingRight: "16px",
}));

export {
  StyledMobileNavbar,
  StyledMobileMenuCenter,
  StyledMobileListCenter,
  StyledMobileMenuHeader,
};
