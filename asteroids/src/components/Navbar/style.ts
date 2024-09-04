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
  backgroundColor: "transparent !important",
  height: 100,
  justifyContent: "center",
}));

const StyledIconButton = styled(IconButton)(() => ({
  display: "none !important",

  "@media (max-width: 670px)": {
    display: "block !important",
  },
}));

const StyledMenuItem = styled(Button)(() => ({
  color: "#fff !important",
}));

const StyledLogoText = styled(Box)(() => ({
  flexGrow: 1,
  display: "none",

  "@media (min-width: 670px)": {
    display: "block",
  },
}));

const StyledLogoNasa = styled(Avatar)(() => ({
  width: "60px  !important",
  height: "60px  !important",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  justifyContent: "space-between",
}));

const StyledWrapperMenuItem = styled(Box)(() => ({
  display: "none",

  "@media (min-width: 670px)": {
    display: "block",
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
