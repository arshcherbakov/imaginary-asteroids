import { Box, useTheme } from "@mui/material";
import Navbar from "../../Navbar";
import TableCustom from "../../TableCustom";
import { TITLE_TABLE_ASTEROIDS, LIST_ASTEROIDS } from "../../../constants";
import { StyledBox, StyledWrapperContent } from "./style";

const AsteroidData: React.FC = () => {
  const theme = useTheme();

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
