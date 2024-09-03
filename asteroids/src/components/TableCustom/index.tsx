import {
  Box,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import ITableCustomProps from "./interface";
import { StyledAsteroidData, StyledTable, StyledTableRow } from "./style";

const TableCustom: React.FC<ITableCustomProps<any>> = ({
  title,
  listData,
  listTableHeader,
}) => (
  <Box>
    <Typography>{title}</Typography>
    <Paper>
      <StyledAsteroidData>
        <StyledTable aria-label="simple table">
          <TableHead>
            <TableRow>
              {listTableHeader.map((title, index) => (
                <TableCell key={index}>{title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {listData.map((data) => (
              <StyledTableRow key={data.id}>
                {Object.keys(data).map((property: string) => (
                  <TableCell component="th" scope="row">
                    {data[property]}
                  </TableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledAsteroidData>
    </Paper>
  </Box>
);

export default TableCustom;
