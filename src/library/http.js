import axios from "axios";

const options = {
  baseURL: import.meta.env.VITE_API,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_HOST,
  },
<<<<<<< HEAD
});

export default axios
=======
};

const http = axios.create(options);

export default http;
>>>>>>> 235653c44d6fbb59325789172fc68c091d9293d2
