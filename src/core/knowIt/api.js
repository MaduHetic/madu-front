import { client } from "../../helpers/api";
import apiRoutes from "../../helpers/apiRoutes";

function getKnowIt() {
  return client.request({
    method: "get",
    url: apiRoutes.knowIt(),
  });
}

function addKnowIt(data) {
  return client.request({
    method: "post",
    url: apiRoutes.knowIt(),
    data: data
  });
}

export const Api = {
  getKnowIt,
  addKnowIt,
};
