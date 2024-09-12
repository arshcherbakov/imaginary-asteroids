import { Box, Container, Stack, Pagination } from "@mui/material";
import styled from "styled-components";
import BORD_SCRIN from "../../../assets/img/stars.jpg";

const StyledBox = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === "dark" ? `url(${BORD_SCRIN})` : "#cdcdcd",
  height: "100%",
}));

const StyledWrapperContent = styled(Container)(() => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingTop: "40px",
}));

const StyledStack = styled(Stack)(() => ({
  displat: "flex",
  alignItems: "center",
  marginTop: "20px",
}));

const StyledPagination = styled(Pagination)(() => ({
  marginBottom: "20px",
}));

export { StyledBox, StyledWrapperContent, StyledStack, StyledPagination };
