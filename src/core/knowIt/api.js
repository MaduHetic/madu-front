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

function deleteKnowIt(id) {
  return client.request({
    method: "delete",
    url: apiRoutes.deleteKnowIt(id),
  });
}

export const Api = {
  getKnowIt,
  addKnowIt,
  deleteKnowIt,
};
