import { useState } from "react";
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
  Checkbox,
  Select,
  MenuItem,
  SelectChangeEvent,
  Collapse,
  Table,
  IconButton,
} from "@mui/material";
import { DIAMETER_SIZES } from "../../constants";
import { StyledTable, StyledTableRow } from "./style";
import { IAsteroid } from "../../interfaces";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface ITableCustomProps {
  titleTable?: string;
  listData: IAsteroid[];
  listTableHeader: (keyof IAsteroid)[];
}

const TableCustom: React.FC<ITableCustomProps> = ({
  titleTable,
  listData,
  listTableHeader,
}) => {
  const theme = useTheme();

  const [quantity, setQuantity] =
    useState<keyof IAsteroid["estimated_diameter"]>("kilometers");
  const [open, setOpen] = useState<boolean>(false);

  const handleQuantity = (event: SelectChangeEvent) => {
    setQuantity(event?.target.value as keyof IAsteroid["estimated_diameter"]);
  };

  // const view = (data: any, key: any) => {
  //   if (data instanceof Object) {
  //     view();
  //   } else {
  //     return data;
  //   }
  // };

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
                {/* {listTableHeader.map((title, index) => (
                  <TableCell key={index}>{title}</TableCell>
                ))} */}

                <TableCell align="center">Название</TableCell>
                <TableCell align="center">абсолютная величина h</TableCell>
                <TableCell align="center">
                  предполагаемый диаметр
                  <Select label="Величина" onChange={handleQuantity}>
                    {DIAMETER_SIZES.map((size, index) => (
                      <MenuItem key={index} value={size.value}>
                        {size.title}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell align="center">опасный</TableCell>
                <TableCell align="center">наблюдения Sentry</TableCell>

                <TableCell align="center">близкая дата приближения</TableCell>
                <TableCell align="center">
                  Дата близкого сближения полная
                </TableCell>
                <TableCell align="center">
                  эпоха, дата, близкое приближение
                </TableCell>
                <TableCell align="center">относительная_скорость</TableCell>
                <TableCell align="center">промах_дистанция</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* <TableRow>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </TableCell>
              </TableRow> */}
              {listData.map((data: IAsteroid) => (
                <>
                  <StyledTableRow key={data.id} onClick={() => setOpen(!open)}>
                    {(Object.keys(listData) as Array<keyof IAsteroid>)
                      .slice(0, 2)
                      .map((property, index) => (
                        <TableCell
                          key={index}
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {data[property] as string}
                        </TableCell>
                      ))}

                    <TableCell component="th" scope="row" align="center">
                      Min:{" "}
                      {data.estimated_diameter[quantity].estimated_diameter_min}{" "}
                      Max:{" "}
                      {data.estimated_diameter[quantity].estimated_diameter_max}
                    </TableCell>

                    <TableCell padding="checkbox" align="center">
                      <Checkbox
                        color="primary"
                        checked={data.is_potentially_hazardous_asteroid}
                      />
                    </TableCell>

                    <TableCell component="th" scope="row" align="center">
                      {data.is_sentry_object ? "Да" : "Нет"}
                    </TableCell>
                  </StyledTableRow>

                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableCell>Date</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell align="right">Amount</TableCell>
                      </TableHead>
                      <TableBody>
                        {(
                          Object.keys(data.close_approach_data[0]) as Array<
                            keyof (typeof data.close_approach_data)[0]
                          >
                        )
                          .slice(0, 3)
                          .map((approacData) => (
                            <TableCell
                              key={approacData}
                              component="th"
                              scope="row"
                              align="center"
                            >
                              {
                                data.close_approach_data[0][
                                  approacData
                                ] as string
                              }
                            </TableCell>
                          ))}

                        <TableCell component="th" scope="row" align="center">
                          {data.close_approach_data[0].orbiting_body}
                        </TableCell>
                      </TableBody>
                    </Table>
                  </Collapse>
                </>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TableCustom;
