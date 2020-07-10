import { client } from "../../helpers/api";
import apiRoutes from "../../helpers/apiRoutes";

function getQuizz(id) {
  return client.request({
    method: "get",
    url: apiRoutes.quizz(id),
  });
}

function addQuizz(data) {
  return client.request({
    method: "post",
    url: apiRoutes.themes(),
    data: data
  });
}

function deleteQuizz(id) {
  return client.request({
    method: "delete",
    url: apiRoutes.deleteQuizz(id),
  });
}

function getThemes() {
  return client.request({
    method: "get",
    url: apiRoutes.themes(),
  });
}

export const Api = {
  getQuizz,
  getThemes,
  addQuizz,
  deleteQuizz,
};
