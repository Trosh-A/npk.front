import axios, { AxiosInstance } from "axios";

const ax: AxiosInstance = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_SERVER_URL}`,
  headers: {
    "Content-type": "application/json",
  },
});

export { ax };
