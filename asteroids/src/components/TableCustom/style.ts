import { Table, TableRow } from "@mui/material";
import styled from "styled-components";

const StyledTable = styled(Table)(() => ({
  minWidth: 650,
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": { border: 0 },
}));

export { StyledTable, StyledTableRow };
