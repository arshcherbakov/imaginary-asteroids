import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Button,
  Avatar,
} from "@mui/material";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)(() => ({
  height: 100,
  justifyContent: "center",

  "&.MuiAppBar-root.MuiAppBar-colorPrimary": {
    backgroundColor: "transparent",
    "--Paper-overlay": "none !important",
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
  "&.MuiButton-root.MuiButton-colorPrimary": {
    color: "#fff",
  },
}));

const StyledLogoText = styled(Box)(() => ({
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
  StyledAppBar,
  StyledIconButton,
  StyledMenuItem,
  StyledLogoText,
  StyledLogoNasa,
  StyledToolbar,
  StyledWrapperMenuItem,
};
