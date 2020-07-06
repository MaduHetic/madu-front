import axios from "axios";
import { getCredsFromStorage } from "../middlewares/saveCredentials";
import apiRoute from "./apiRoutes";

export const client = axios.create({
  baseURL: process.env.REACT_APP_API || 'http://localhost:3000',
  responseType: "json",
  xsrfCookieName: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
  Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("user"))}`,
});

client.interceptors.request.use(
  async (config) => {
    if (config.url === apiRoute.signIn()) {
      return config;
    }

    const credentials = await getCredsFromStorage();
    console.debug(`[authentified request] url: ${config.url}`);

    config.headers.Authorization = `Bearer ${credentials}`;
    return config;
  },
  (error) => Promise.reject(error),
);

export default client;
