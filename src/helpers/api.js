import axios from "axios";

export const client = axios.create({
  baseURL: '54.93.154.86:3000',
  responseType: "json",
  xsrfCookieName: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

export const options = {
  interceptors: {
    request: [
      (store, config) => {
        if (store.getState().user.credentials["access-token"]) {
          config.headers["access-token"] = store.getState().user.credentials["access-token"];
        }
        return config;
      },
    ],
    response: [
      (store, response) => {
        return response;
      },
    ],
  },
};