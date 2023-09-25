import axios from "axios";

const options = {
  baseURL: import.meta.env.VITE_API,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_HOST,
  },
};

const http = axios.create(options);

export default http;
