import { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../../Navbar";
import TableCustom from "../../TableCustom";
import { TITLE_TABLE_ASTEROIDS, LIST_ASTEROIDS } from "../../../constants";
import { StyledBox, StyledWrapperContent } from "./style";
import { RootState } from "../../../store";
import axios from "axios";
import { getAllDataAboutAsteroids } from "../../../services";
import { useDispatch } from "react-redux";
import { fetchAsteroids } from "../../../store/slices/asteroidSlice";
import { IAsteroid } from "../../../interfases";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";

const AsteroidData: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const asteroids = useSelector(
    (state: RootState) => state.asteroids.listAsteroids
  );

  const dateAsteroid: string[] = Object.keys(asteroids);
  const countPage: number = dateAsteroid.length;
  const [asteroidsSelectDate, setAsteroidsSelectDate] = useState<IAsteroid[]>(
    []
  );

  useEffect(() => {
    // const fetchAsteroidData = async () => {
    //   // const response = await fetch(
    //   //   "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY"
    //   // );
    //   // const data = await response.json();
    //   // console.log(data);
    //   const response = await axios.get(
    //     "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY"
    //   );
    //   console.log(response.data);
    // };
    // fetchAsteroidData();
    dispatch<any>(fetchAsteroids());
    console.log(asteroids);
    console.log(asteroidsSelectDate);
  }, []);

  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(dateAsteroid[value - 1]);
    const date: string = dateAsteroid[value - 1];
    setAsteroidsSelectDate(asteroids[date.toString()]);
  };

  return (
    <Box>
      <Navbar />
      <StyledBox theme={theme}>
        <StyledWrapperContent maxWidth="xl">
          <TableCustom
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
