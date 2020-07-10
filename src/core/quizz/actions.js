import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  getQuizz: createAction("quizz/get")(),
  addQuizz: createAction("quizz/post")(),
  deleteQuizz: createAction("quizz/delete")(),
  getThemes: createAction("theme/get")(),
};

export const Actions = {
  getQuizz: createAsyncAction(
    "quizz/get/request",
    "quizz/get/success",
    "quizz/get/failure",
  )(),
  addQuizz: createAsyncAction(
    "quizz/post/request",
    "quizz/post/success",
    "quizz/post/failure",
  )(),
  deleteQuizz: createAsyncAction(
    "quizz/delete/request",
    "quizz/delete/success",
    "quizz/delete/failure",
  )(),
  getThemes: createAsyncAction(
    "theme/get/request",
    "theme/get/success",
    "theme/get/failure",
  )(),
};
