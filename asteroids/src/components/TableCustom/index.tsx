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

const TableCustom: React.FC<ITableCustomProps> = ({
  title,
  listAsteroids,
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
            {listAsteroids.map((asteroid) => (
              <TableRow key={asteroid.id} sx={styles.tableRow}>
                <TableCell component="th" scope="row">
                  {asteroid.id}
                </TableCell>
                <TableCell scope="row">{asteroid.name}</TableCell>
                <TableCell component="th">{asteroid.name_limited}</TableCell>
                <TableCell component="th">
                  {asteroid.absolute_magnitude_h}
                </TableCell>
                <TableCell component="th">{asteroid.designation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableCustom;
