import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)(() => ({
  height: 100,
  justifyContent: "center",
  // background: "#ffffff",
  "&.MuiAppBar-root.MuiAppBar-colorPrimary": {
    "--Paper-overlay": "none !important",
    "--Paper-shadow": "none !important",
    "--AppBar-background": "#ffffff",
    // background: "#000",
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

const StyledMenuItem = styled(Button)(() => ({
  // color: "#ffffff !impo",
  "&.MuiButton-root": {
    // color: "#fcfcfc",
    // // color: "#fff",
    // color: "var(--variant-textColor)",
    // "--variant-textColor": "none",
    // color: "#000",
  },
}));

const StyledLogoText = styled(Typography)(() => ({
  flexGrow: 1,
  display: "none",
  // color: "#000",
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
  StyledAppBar,
  StyledIconButton,
  StyledMenuItem,
  StyledLogoText,
  StyledLogoNasa,
  StyledToolbar,
  StyledWrapperMenuItem,
};
