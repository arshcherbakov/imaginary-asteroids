import { Box, Container } from "@mui/material";
import styled from "styled-components";
import BORD_SCRIN from "../../../assets/img/stars.jpg";

const StyledAsteroidData = styled(Box)(() => ({
  backgroundColor: "#000",
}));

const StyledBox = styled(Box)(() => ({
  background: `url(${BORD_SCRIN})`,
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
