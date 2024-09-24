import { FC, PropsWithChildren } from 'react';
import {
  Box,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  TableCell,
  Collapse,
  Table,
  useTheme,
} from '@mui/material';
import { ITitleTableAsteroids } from '../../../interfaces';
import ICustomPopupTable from './interface';

const CustomPopupTable: FC<
  PropsWithChildren<ICustomPopupTable<ITitleTableAsteroids>>
> = ({ children, listTitlesTable, titleTable, open }) => {
  const theme = useTheme();

  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box sx={{ margin: 1 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: theme.palette.primary.contrastText }}
        >
          {titleTable}
        </Typography>
        <Table size="small" aria-label="purchases">
          <TableHead>
            <TableRow>
              {listTitlesTable.map((title, index) => (
                <TableCell
                  key={index}
                  component="th"
                  scope="row"
                  align="center"
                >
                  {title.titleTable}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>{children}</TableRow>
          </TableBody>
        </Table>
      </Box>
    </Collapse>
  );
};

export default CustomPopupTable;
