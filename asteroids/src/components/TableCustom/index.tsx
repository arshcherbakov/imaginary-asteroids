import {
  Table,
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import ITableCustomProps from "./interface";
import { useStyle } from "./style";

const TableCustom: React.FC<ITableCustomProps<any>> = ({
  title,
  listData,
  listTableHeader,
}) => {
  const styles = useStyle();

  return (
    <Box>
      <Typography>{title}</Typography>
      <TableContainer component={Paper} sx={styles.tableContainer}>
        <Table sx={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {listTableHeader.map((title, index) => (
                <TableCell key={index}>{title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {listData.map((data) => (
              <TableRow key={data.id} sx={styles.tableRow}>
                {Object.keys(data).map((property: string) => (
                  <TableCell component="th" scope="row">
                    {data[`${property}`]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableCustom;
