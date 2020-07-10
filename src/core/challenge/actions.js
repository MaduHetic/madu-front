import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  getChallenge: createAction("get/challenge")(),
  addChallenge: createAction("post/challenge")(),
  deleteChallenge: createAction("delete/challenge")(),
};

export const Actions = {
  getChallenge: createAsyncAction(
    "get/challenge/request",
    "get/challenge/success",
    "get/challenge/failure",
  )(),
  addChallenge: createAsyncAction(
    "post/challenge/request",
    "post/challenge/success",
    "post/challenge/failure",
  )(),
  deleteChallenge: createAsyncAction(
    "delete/challenge/request",
    "delete/challenge/success",
    "delete/challenge/failure",
  )(),
};
