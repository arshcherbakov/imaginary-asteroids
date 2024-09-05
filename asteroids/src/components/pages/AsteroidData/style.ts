import { Box, Container } from "@mui/material";
import styled from "styled-components";
import BORD_SCRIN from "../../../assets/img/stars.jpg";

const StyledAsteroidData = styled(Box)(() => ({
  // "&.MuiBox-root": {
  //   background: "#000",
  // },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === "dark" ? `url(${BORD_SCRIN})` : "#cdcdcd",
  height: "100vh",
}));

const StyledWrapperContent = styled(Container)(() => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingTop: "40px",
}));

export { StyledAsteroidData, StyledBox, StyledWrapperContent };
