import { client } from "../../helpers/api";
import apiRoutes from "../../helpers/apiRoutes";

function getQuizz(id) {
  return client.request({
    method: "get",
    url: apiRoutes.quizz(id),
  });
}

function addQuizz(id) {
  return client.request({
    method: "post",
    url: apiRoutes.quizz(id),
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
  addQuizz
};
