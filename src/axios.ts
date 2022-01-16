import axios, { AxiosInstance } from "axios";

const ax: AxiosInstance = axios.create({
  headers: {
    "Content-type": "application/json",
  },
});

export { ax };
