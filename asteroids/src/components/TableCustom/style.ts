import { Table, TableContainer, TableRow } from "@mui/material";
import styled from "styled-components";

const StyledAsteroidData = styled(TableContainer)(() => ({
  bgcolor: "#f9f9f9",
}));

const StyledTable = styled(Table)(() => ({
  minWidth: 650,
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": { border: 0 },
}));

export { StyledAsteroidData, StyledTable, StyledTableRow };
