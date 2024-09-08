import { AxiosResponse } from "axios";
import { get } from "../http/index";

export const getAllDataAboutAsteroids = (): Promise<AxiosResponse> =>
  get("https://api.nasa.gov/neo/rest/v1/feed?&api_key=DEMO_KEY");
