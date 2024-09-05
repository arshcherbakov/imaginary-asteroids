import { Table, TableContainer, TableRow, TableCell } from "@mui/material";
import styled from "styled-components";

const StyledAsteroidData = styled(TableContainer)(() => ({
  backgroundColor: "#1c1c1c",
}));

const StyledTable = styled(Table)(() => ({
  minWidth: 650,
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": { border: 0 },
}));

const StyledTableCell = styled(TableCell)(() => ({
  "&.MuiTableCell-root": {
    color: "#ffffff",
  },
}));

export { StyledAsteroidData, StyledTable, StyledTableRow, StyledTableCell };
