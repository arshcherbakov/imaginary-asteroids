import { AxiosResponse } from "axios";
import { get } from "../http/index";

export const getAllDataAboutAsteroids = () => {
  get(
    "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&"
  ).then((res) => console.log(res));
};
