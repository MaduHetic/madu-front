import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  getKnowIt: createAction("get/know/it")(),
  addKnowIt: createAction("post/know/it")(),
  deleteKnowIt: createAction("delete/know/it")(),
};

export const Actions = {
  getKnowIt: createAsyncAction(
    "get/know/it/request",
    "get/know/it/success",
    "get/know/it/failure",
  )(),
  addKnowIt: createAsyncAction(
    "post/know/it/request",
    "post/know/it/success",
    "post/know/it/failure",
  )(),
  deleteKnowIt: createAsyncAction(
    "delete/know/it/request",
    "delete/know/it/success",
    "delete/know/it/failure",
  )(),
};
