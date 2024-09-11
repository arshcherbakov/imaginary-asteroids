import React, { useState } from "react";
import {
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableContainer,
  SelectChangeEvent,
  Table,
  Link,
  useTheme,
  Typography,
} from "@mui/material";
import CustomSelector from "../UI/CustomSelector";
import PopupTableApproach from "../PopupTableApproach ";
import {
  TITLE_TABLE_ASTEROIDS,
  DIAMETER_SIZES,
  LIST_ASTEROIDS,
} from "../../constants";
import { IAsteroid, ITitleTableAsteroids } from "../../interfaces";
import { StyledTable, StyledTableRow, StyledSelector } from "./style";

interface ITableCustomProps {
  titleTable?: string;
  listData: IAsteroid[];
  listTableHeader: ITitleTableAsteroids[];
}

const TableAsteroids: React.FC<ITableCustomProps> = ({
  titleTable,
  listData,
  listTableHeader,
}) => {
  const theme = useTheme();

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
              <TableCell
                align="center"
                key={index}
                sx={
                  index === 3
                    ? {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }
                    : {}
                }
              >
                {title.titleTable}
                {index === 3 && (
                  <CustomSelector
                    selelctorValue={quantity}
                    dataList={DIAMETER_SIZES}
                    styleSelector={{ marginLeft: "10px" }}
                    handleSelector={handleQuantity}
                  />
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
                    {index === 0 ? (
                      <Link
                        href={data.nasa_jpl_url}
                        sx={{ color: theme.palette.primary.contrastText }}
                      >
                        {data[title.fieldName as keyof IAsteroid] as string}
                      </Link>
                    ) : index === 2 ? (
                      (data[title.fieldName as keyof IAsteroid] as string) ? (
                        "Да"
                      ) : (
                        "Нет"
                      )
                    ) : (
                      (data[title.fieldName as keyof IAsteroid] as string)
                    )}
                  </TableCell>
                ))}

                <TableCell component="th" scope="row" align="center">
                  <Typography>
                    Min:
                    {data.estimated_diameter[quantity].estimated_diameter_min}
                  </Typography>
                  <Typography>
                    Max:
                    {data.estimated_diameter[quantity].estimated_diameter_max}
                  </Typography>
                </TableCell>

                <TableCell component="th" scope="row" align="center">
                  {data.is_sentry_object ? "Да" : "Нет"}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  style={{ paddingBottom: 0, paddingTop: 0 }}
                  sx={{ background: theme.palette.primary.light }}
                  colSpan={6}
                >
                  <PopupTableApproach
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

export default TableAsteroids;
