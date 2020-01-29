import { client } from "../../helpers/api";
import apiRoutes from "../../helpers/apiRoutes";

function signOut() {
  return client.request({
    method: "delete",
    url: apiRoutes.signOut()
  });
}

function signIn(data) {
  return client.request({
    method: "post",
    url: apiRoutes.signIn(),
    data
  });
}

function signUp() {
  return client.request({
    method: "post",
    url: apiRoutes.signUp()
  });
}

export const Api = {
  signOut,
  signIn,
  signUp,
};