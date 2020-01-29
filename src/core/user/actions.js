import { createAction, createAsyncAction } from "typesafe-actions";

export const Events = {
  signIn: createAction("user/sign/in/send")(),
  signUp: createAction("user/sign/up/send")(),
  signOut: createAction("user/sign/out/delete")(),
};

export const Actions = {
  signIn: createAsyncAction(
    "user/sign/in/send/request",
    "user/sign/in/send/success",
    "user/sign/in/send/failure"
  )(),
  signUp: createAsyncAction(
    "user/sign/up/send/request",
    "user/sign/up/send/success",
    "user/sign/up/send/failure"
  )(),
  signOut: createAsyncAction(
    "user/sign/out/delete/request",
    "user/sign/out/delete/success",
    "user/sign/out/delete/failure"
  )(),
};