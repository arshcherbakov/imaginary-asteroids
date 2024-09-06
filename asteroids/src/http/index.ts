import axios, { AxiosInstance } from "axios";

const $api: AxiosInstance = axios.create({
  withCredentials: true,
  params: {
    api_key: "DEMO_KEY",
  },
  // baseURL: "https://api.nasa.gov/neo/rest/v1/neo/browse",
});

const post = $api.post;
const get = $api.get;

export { post, get };
