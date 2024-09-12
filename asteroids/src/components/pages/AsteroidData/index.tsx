import { useEffect, FC } from "react";
import { Box, Pagination, useTheme } from "@mui/material";
import Navbar from "../../Navbar";
import TableAsteroids from "../../TableAsteroids";
import { RootState } from "../../../store";
import useAppDispatch from "../../../hooks/useAppDispatch";
import useAppSelector from "../../../hooks/useAppSelector";
import {
  fetchAsteroids,
  pagination,
} from "../../../store/slices/asteroidSlice";
import {
  StyledBox,
  StyledWrapperContent,
  StyledStack,
  StyledPagination,
} from "./style";

const AsteroidData: FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const { listAsteroids, listAllAsteroids } = useAppSelector(
    (state: RootState) => state.asteroids
  );

  const countPages: number = Object.keys(listAllAsteroids).length;

  useEffect(() => {
    dispatch(fetchAsteroids());
  }, []);

  const handlePage = (_: React.ChangeEvent<unknown>, value: number) => {
    dispatch(pagination(value));
  };

  return (
    <Box>
      <Navbar />
      <StyledBox theme={theme}>
        <StyledWrapperContent maxWidth="xl">
          <TableAsteroids titleTable="Asteroid data" listData={listAsteroids} />
          <StyledStack>
            <StyledPagination
              count={countPages}
              variant="outlined"
              shape="rounded"
              onChange={handlePage}
            />
          </StyledStack>
        </StyledWrapperContent>
      </StyledBox>
    </Box>
  );
};

export default AsteroidData;
