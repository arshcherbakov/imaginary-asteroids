import Navbar from "../../Navbar";
import TableCustom from "../../TableCustom";
import { TITLE_TABLE_ASTEROIDS, LIST_ASTEROIDS } from "../../../constants";
import { StyledAsteroidData, StyledBox, StyledWrapperContent } from "./style";

const AsteroidData: React.FC = () => (
  <StyledAsteroidData>
    <Navbar />
    <StyledBox>
      <StyledWrapperContent maxWidth="xl">
        <TableCustom
          title="Asteroid data"
          listTableHeader={TITLE_TABLE_ASTEROIDS}
          listData={LIST_ASTEROIDS}
        />
      </StyledWrapperContent>
    </StyledBox>
  </StyledAsteroidData>
);

export default AsteroidData;
