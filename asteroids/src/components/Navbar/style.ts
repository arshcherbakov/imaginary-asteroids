import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Avatar,
  Typography,
  Theme,
} from "@mui/material";
import styled from "styled-components";

const StyledNavbar = styled(Box)(() => ({
  width: "100%",
  height: "100px",
  justifyContent: "center",
  "&.MuiAppBar-root.MuiAppBar-colorPrimary": {
    "--Paper-overlay": "none !important",
    "--Paper-shadow": "none !important",
  },
}));

const StyledAppBar = styled(AppBar)(() => ({
  height: "100px",
  justifyContent: "center",
  "&.MuiAppBar-root.MuiAppBar-colorPrimary": {
    "--Paper-overlay": "none !important",
    "--Paper-shadow": "none !important",
  },
}));

const StyledIconButton = styled(IconButton)(() => ({
  "&.MuiIconButton-root": {
    display: "none",
  },

  "@media (max-width: 670px)": {
    "&.MuiIconButton-root": {
      display: "block",
    },
  },
}));

const StyledLogoText = styled(Typography)<{ theme?: Theme }>((theme) => ({
  flexGrow: 1,
  display: "none",

  "@media (min-width: 670px)": {
    display: "block",
  },
}));

const StyledLogoNasa = styled(Avatar)(() => ({
  "&.MuiAvatar-root.MuiAvatar-circular": {
    width: "60px",
    height: "60px",
  },
}));

const StyledToolbar = styled(Toolbar)(() => ({
  justifyContent: "space-between",
}));

const StyledWrapperMenuItem = styled(Box)(() => ({
  display: "none",
  "@media (min-width: 670px)": {
    display: "flex",
    alignItems: "center",
  },
}));

export {
  StyledNavbar,
  StyledAppBar,
  StyledIconButton,
  StyledLogoText,
  StyledLogoNasa,
  StyledToolbar,
  StyledWrapperMenuItem,
};
