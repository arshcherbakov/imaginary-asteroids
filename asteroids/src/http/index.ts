import axios, { AxiosInstance } from "axios";

const $api: AxiosInstance = axios.create({
  params: {
    api_key: "DEMO_KEY",
  },
  baseURL: "https://api.nasa.gov/neo/rest/v1/",
});

const get = $api.get;

export { get };
