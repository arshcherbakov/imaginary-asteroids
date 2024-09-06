import {
  Box,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TableCell,
  TableContainer,
  useTheme,
} from "@mui/material";
import { StyledTable, StyledTableRow } from "./style";

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
}: ITableCustomProps<T>): React.ReactElement => {
  const theme = useTheme();
  return (
    <Box>
      <Typography>{titleTable}</Typography>
      <Paper>
        <TableContainer
          sx={{
            background: theme.palette.primary.light,
          }}
        >
          <StyledTable aria-label="simple table">
            <TableHead>
              <TableRow>
                {listTableHeader?.map((title, index) => (
                  <TableCell key={index}>{title as string}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {listData.map((data) => (
                <StyledTableRow key={data.id}>
                  {listTableHeader?.map((property, index) => (
                    <TableCell key={index} component="th" scope="row">
                      {data[property] as unknown as string}
                    </TableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TableCustom;
