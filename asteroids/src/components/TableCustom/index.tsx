import {
  Box,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import ITableCustomProps from "./interface";
import {
  StyledAsteroidData,
  StyledTable,
  StyledTableRow,
  StyledTableCell,
} from "./style";

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
                <StyledTableCell key={index}>{title}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {listData.map((data) => (
              <StyledTableRow key={data.id}>
                {Object.keys(data).map((property: string, index) => (
                  <StyledTableCell key={index} component="th" scope="row">
                    {data[property]}
                  </StyledTableCell>
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
