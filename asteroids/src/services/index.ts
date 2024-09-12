import { AxiosResponse } from "axios";
import { get } from "../http/index";

export const getAllDataAboutAsteroids = (): Promise<AxiosResponse> =>
  get("/feed");
