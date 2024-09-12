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
import PopupTableApproach from "../PopupTableApproach";
import convertBooleanToAnswer from "../../helpers/convert-boolean-to-answer";
import { TITLE_TABLE_ASTEROIDS, DIAMETER_SIZES } from "../../constants";
import { IAsteroid } from "../../interfaces";
import ITableAsteroidsProps from "./interface";
import { StyledTableRow, StyledTableCellBody } from "./style";

const styleTableCellWithSelector = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const TableAsteroids: React.FC<ITableAsteroidsProps> = ({ listData }) => {
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
                sx={index === 3 ? styleTableCellWithSelector : {}}
              >
                {title.titleTable}
                {index === 3 && (
                  <CustomSelector
                    selelctorValue={quantity}
                    dataList={DIAMETER_SIZES}
                    handleSelector={handleQuantity}
                  />
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {listData.map((data: IAsteroid) => (
            <React.Fragment key={data.id}>
              <StyledTableRow onClick={() => handleOpenPopupTable(data.id)}>
                {TITLE_TABLE_ASTEROIDS.slice(0, 3).map((title, index) => (
                  <TableCell
                    key={index}
                    component="th"
                    scope="row"
                    align="center"
                  >
                    {index === 0 && (
                      <Link
                        href={data.nasa_jpl_url}
                        sx={{ color: theme.palette.primary.contrastText }}
                      >
                        {data[title.fieldName as keyof IAsteroid] as string}
                      </Link>
                    )}
                    {index === 2 &&
                      convertBooleanToAnswer(
                        data[title.fieldName as keyof IAsteroid] as boolean
                      )}
                    {index !== 0 && index !== 2 && (
                      <>{data[title.fieldName as keyof IAsteroid] as string}</>
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
                  {convertBooleanToAnswer(data.is_sentry_object)}
                </TableCell>
              </StyledTableRow>
              <TableRow>
                <StyledTableCellBody
                  sx={{ background: theme.palette.primary.light }}
                  colSpan={6}
                >
                  <PopupTableApproach
                    open={idOpenTabl === data.id ? isOpen : false}
                    asteroid={data}
                  />
                </StyledTableCellBody>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableAsteroids;
