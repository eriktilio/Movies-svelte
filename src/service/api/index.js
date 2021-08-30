import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000,
  params: {
    api_key: "072f7afd3eb6fad41b2d0a943d553c2a",
    language: "pt-BR",
  },
});

export default api;
