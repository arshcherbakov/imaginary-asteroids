import React, { useState } from "react";
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
import {
  TITLE_TABLE_ASTEROIDS,
  DIAMETER_SIZES,
  LIST_ASTEROIDS,
  RELATIVE_SPEED_UNITS,
  UNITS_MEASUREMENT_SLIP_DISTANCE,
} from "../../constants";
import { IAsteroid, ITitleTableAsteroids } from "../../interfaces";
import { StyledTable, StyledTableRow, StyledSelector } from "./style";

interface ITableCustomProps {
  titleTable?: string;
  listData: IAsteroid[];
  listTableHeader: ITitleTableAsteroids[];
}

interface IPopupTable {
  open: boolean;
  asteroid: IAsteroid;
}

const PopupTable: React.FC<IPopupTable> = ({ open, asteroid }) => {
  const [unitsOfSpeed, setUnitsOfSpeed] =
    useState<keyof IAsteroid["close_approach_data"][0]["relative_velocity"]>();

  const [unitsOfMissDistance, setUnitsOfMissDistance] =
    useState<keyof IAsteroid["close_approach_data"][0]["miss_distance"]>();

  const handleUnitsOfSpeed = (event: SelectChangeEvent<unknown>) => {
    setUnitsOfSpeed(
      event.target
        .value as keyof IAsteroid["close_approach_data"][0]["relative_velocity"]
    );
  };

  const handleUnitsOfMissDistance = (event: SelectChangeEvent<unknown>) => {
    setUnitsOfMissDistance(
      event.target
        .value as keyof IAsteroid["close_approach_data"][0]["miss_distance"]
    );
  };

  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box sx={{ margin: 1 }}>
        <Typography variant="h6" gutterBottom component="div">
          Данные сближения
        </Typography>
        <Table size="small" aria-label="purchases">
          <TableHead>
            <TableRow>
              {TITLE_TABLE_ASTEROIDS.slice(5, 11).map((title, index) => (
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
            <TableRow>
              {(
                Object.keys(asteroid.close_approach_data[0]) as Array<
                  keyof (typeof asteroid.close_approach_data)[0]
                >
              ).map(
                (field, index) =>
                  !(
                    asteroid.close_approach_data[0][field] instanceof Object
                  ) && (
                    <TableCell
                      key={index}
                      component="th"
                      scope="row"
                      align="center"
                    >
                      {asteroid.close_approach_data[0][field] as string}
                    </TableCell>
                  )
              )}

              <TableCell component="th" scope="row" align="center">
                {
                  asteroid.close_approach_data[0].relative_velocity[
                    unitsOfSpeed as keyof IAsteroid["close_approach_data"][0]["relative_velocity"]
                  ] as string
                }
                <StyledSelector
                  label="Величина"
                  defaultValue={"dwd"}
                  onChange={handleUnitsOfSpeed}
                >
                  {RELATIVE_SPEED_UNITS.map((size, index) => (
                    <MenuItem key={index} value={size.value}>
                      {size.title}
                    </MenuItem>
                  ))}
                </StyledSelector>
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {asteroid.close_approach_data[0].miss_distance.astronomical}
                <StyledSelector
                  label="Величина"
                  onChange={handleUnitsOfMissDistance}
                >
                  {UNITS_MEASUREMENT_SLIP_DISTANCE.map((size, index) => (
                    <MenuItem key={index} value={size.value}>
                      {size.title}
                    </MenuItem>
                  ))}
                </StyledSelector>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Collapse>
  );
};

const TableCustom: React.FC<ITableCustomProps> = ({
  titleTable,
  listData,
  listTableHeader,
}) => {
  const [quantity, setQuantity] =
    useState<keyof IAsteroid["estimated_diameter"]>("kilometers");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [idOpenTabl, setIdOpenTabl] = useState<string>("");

  const handleQuantity = (event: SelectChangeEvent<unknown>) => {
    setQuantity(event.target.value as keyof IAsteroid["estimated_diameter"]);
  };

  const handleOpenPopupTable = (id: string) => {
    setIdOpenTabl(id);
    setIsOpen(!isOpen);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {TITLE_TABLE_ASTEROIDS.slice(0, 5).map((title, index) => (
              <TableCell align="center" key={index}>
                {title.titleTable}
                {index === 3 && (
                  <StyledSelector label="Величина" onChange={handleQuantity}>
                    {DIAMETER_SIZES.map((size, index) => (
                      <MenuItem key={index} value={size.value}>
                        {size.title}
                      </MenuItem>
                    ))}
                  </StyledSelector>
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {LIST_ASTEROIDS.map((data: IAsteroid) => (
            <React.Fragment key={data.id}>
              <TableRow
                sx={{ "& > *": { borderBottom: "unset" } }}
                onClick={() => handleOpenPopupTable(data.id)}
              >
                {TITLE_TABLE_ASTEROIDS.slice(0, 3).map((title, index) => (
                  <TableCell
                    key={index}
                    component="th"
                    scope="row"
                    align="center"
                  >
                    {index === 2
                      ? (data[title.fieldName as keyof IAsteroid] as string)
                        ? "Да"
                        : "Нет"
                      : (data[title.fieldName as keyof IAsteroid] as string)}
                  </TableCell>
                ))}

                <TableCell component="th" scope="row" align="center">
                  Min:{" "}
                  {data.estimated_diameter[quantity].estimated_diameter_min}{" "}
                  Max:{" "}
                  {data.estimated_diameter[quantity].estimated_diameter_max}
                </TableCell>

                <TableCell component="th" scope="row" align="center">
                  {data.is_sentry_object ? "Да" : "Нет"}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  sx={{ background: "#e5e5e5" }}
                  colSpan={6}
                >
                  <PopupTable
                    open={idOpenTabl === data.id ? isOpen : false}
                    asteroid={data}
                  />
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCustom;
