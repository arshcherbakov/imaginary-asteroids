import { Box, Container } from "@mui/material";
import Navbar from "../../Navbar";
import TableCustom from "../../TableCustom";
import { TITLE_TABLE_ASTEROIDS, LIST_ASTEROIDS } from "../../../constants";
import BORD_SCRIN from "../../../assets/img/stars.jpg";
import { useStyle } from "./style";

const AsteroidData: React.FC = () => {
  const styles = useStyle(BORD_SCRIN);

  return (
    <Box sx={styles.asteroidData}>
      <Navbar />
      <Box sx={styles.asteroidDataContent}>
        <Container maxWidth="xl" sx={styles.wrapperContent}>
          <TableCustom
            title="Asteroid data"
            listTableHeader={TITLE_TABLE_ASTEROIDS}
            listData={LIST_ASTEROIDS}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default AsteroidData;
