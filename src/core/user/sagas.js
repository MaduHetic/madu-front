import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";
import { Actions, Events } from "./actions";
import { formatCredentials } from "../../helpers/credentials";

function* signIn(action) {
  try {
    yield put(Actions.signIn.request(true));
    const request = yield call(Api.signIn, action.payload);
    console.log(request);
    if (request.status === 200) {
      localStorage.setItem(
        "user",
        JSON.stringify(formatCredentials(request.headers))
      );
      yield put(Actions.signIn.success(request.data.data));
    }
  } catch {
    yield put(Actions.signIn.failure(false));
  }
}

function* signUp() {
  try {
    yield put(Actions.signUp.request(true));
    const request = yield call(Api.signOut);
    if (request.status === 200) {
      yield put(Actions.signUp.success(request.data.data));
    }
  } catch {
    yield put(Actions.signUp.failure(false));
  }
}

function* signOut() {
  try {
    yield put(Actions.signOut.request(true));
    const request = yield call(Api.signOut);
    if (request.status === 200) {
      localStorage.removeItem("user");
      yield put(Actions.signOut.success(request.data));
    }
  } catch {
    yield put(Actions.signOut.failure(false));
  }
}

export function* rootSagas() {
  yield takeLatest(Events.signIn, signIn);
  yield takeLatest(Events.signUp, signUp);
  yield takeLatest(Events.signOut, signOut);
}