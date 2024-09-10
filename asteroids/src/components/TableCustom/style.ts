import { Table, TableRow, Select } from "@mui/material";
import styled from "styled-components";

const StyledTable = styled(Table)(() => ({
  minWidth: 650,
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": { border: 0 },
}));

const StyledSelector = styled(Select)(() => ({
  width: "auto",
  height: "40px",
}));

export { StyledTable, StyledTableRow, StyledSelector };
