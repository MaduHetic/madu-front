import axios from "axios";

export const client = axios.create({
  baseURL: 'http://35.180.228.155:3000',
  responseType: "json",
  xsrfCookieName: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("user"))}`,
  },
});

export const options = {
  interceptors: {
    request: [
      (store, config) => {
        if (store.getState().user.auth_token) {
          config.headers.Authorization = `Bearer ${store.getState().user.auth_token}`;
        } else if (window.localStorage.getItem('user')) {
          config.headers.Authorization = `Bearer ${JSON.parse(window.localStorage.getItem('user'))}`;
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