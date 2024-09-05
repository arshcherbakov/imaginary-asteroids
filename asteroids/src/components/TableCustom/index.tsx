import {
  Box,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import {
  StyledAsteroidData,
  StyledTable,
  StyledTableRow,
  StyledTableCell,
} from "./style";

interface ITableCustomProps<T> {
  titleTable?: string;
  listData: T[];
  listTableHeader?: Array<keyof T>;
}

interface IAsteroid {
  id: string;
  name: string;
  name_limited: string;
  absolute_magnitude_h: number;
  designation: string;
}

const TableCustom = <T extends IAsteroid>({
  titleTable,
  listData,
  listTableHeader,
}: ITableCustomProps<T>): React.ReactElement => (
  <Box>
    <Typography>{titleTable}</Typography>
    <Paper>
      <StyledAsteroidData>
        <StyledTable aria-label="simple table">
          <TableHead>
            <TableRow>
              {listTableHeader?.map((title, index) => (
                <StyledTableCell key={index}>{title as string}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {listData.map((data) => (
              <StyledTableRow key={data.id}>
                {listTableHeader?.map((property, index) => (
                  <StyledTableCell key={index} component="th" scope="row">
                    {data[property] as unknown as string}
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
