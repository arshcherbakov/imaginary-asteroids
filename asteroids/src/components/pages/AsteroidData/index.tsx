import { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../../Navbar";
import TableAsteroids from "../../TableAsteroids";
import { TITLE_TABLE_ASTEROIDS, LIST_ASTEROIDS } from "../../../constants";
import { StyledBox, StyledWrapperContent } from "./style";
import { RootState } from "../../../store";
import axios from "axios";
import { getAllDataAboutAsteroids } from "../../../services";
import { useDispatch } from "react-redux";
import { fetchAsteroids } from "../../../store/slices/asteroidSlice";
import { IAsteroid } from "../../../interfaces";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";

const AsteroidData: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { listDate } = useSelector((state: RootState) => state.asteroids);

  const dateAsteroid: string[] = Object.keys(listDate);
  const countPage: number = dateAsteroid.length;
  const [asteroidsSelectDate, setAsteroidsSelectDate] = useState<IAsteroid[]>(
    []
  );

  useEffect(() => {
    // dispatch<any>(fetchAsteroids());
  }, []);

  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    const date: string = dateAsteroid[value - 1];

    setAsteroidsSelectDate(listDate[date]);
  };

  return (
    <Box>
      <Navbar />
      <StyledBox theme={theme}>
        <StyledWrapperContent maxWidth="xl">
          <TableAsteroids
            titleTable="Asteroid data"
            listTableHeader={TITLE_TABLE_ASTEROIDS}
            listData={LIST_ASTEROIDS}
          />
          <Stack
            sx={{
              displat: "flex",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Pagination
              count={countPage || 8}
              variant="outlined"
              shape="rounded"
              onChange={handlePage}
            />
          </Stack>
        </StyledWrapperContent>
      </StyledBox>
    </Box>
  );
};

export default AsteroidData;
