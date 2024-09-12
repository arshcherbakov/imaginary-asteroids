import { TableRow, TableCell } from "@mui/material";
import styled from "styled-components";

const StyledTableRow = styled(TableRow)(() => ({
  "& > *": { borderBottom: "unset" },
}));

const StyledTableCellBody = styled(TableCell)((style) => ({
  "&.MuiTableCell-root": {
    paddingBottom: 0,
    paddingTop: 0,
  },
}));

export { StyledTableRow, StyledTableCellBody };
