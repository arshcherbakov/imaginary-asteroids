import { Box, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../../Navbar";
import TableCustom from "../../TableCustom";
import { TITLE_TABLE_ASTEROIDS, LIST_ASTEROIDS } from "../../../constants";
import { StyledBox, StyledWrapperContent } from "./style";
import { RootState } from "../../../store";

const AsteroidData: React.FC = () => {
  const theme = useTheme();
  const asteroids = useSelector(
    (state: RootState) => state.asteroids.listAsteroids
  );

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
        </StyledWrapperContent>
      </StyledBox>
    </Box>
  );
};

export default AsteroidData;
