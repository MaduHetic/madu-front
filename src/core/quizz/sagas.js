import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";
import { Actions, Events } from "./actions";

function* getQuizz(action) {
  try {
    yield put(Actions.getQuizz.request(true));
    const request = yield call(Api.getQuizz, action.payload);
    if (request.status === 200) {
      yield put(Actions.getQuizz.success(request.data));
    }
  } catch {
    yield put(Actions.getQuizz.failure(false));
  }
}

function* addQuizz(action) {
  try {
    yield put(Actions.addQuizz.request(true));
    const request = yield call(Api.addQuizz, action.payload);
    if (request.status === 200) {
      yield put(Actions.addQuizz.success(request.data));
    }
  } catch {
    yield put(Actions.addQuizz.failure(false));
  }
}

function* deleteQuizz(action) {
  try {
    yield put(Actions.deleteQuizz.request(true));
    const request = yield call(Api.deleteQuizz, action.payload);
    if (request.status === 200) {
      yield put(Actions.deleteQuizz.success(request.data));
      yield call(getThemes);
    }
  } catch {
    yield put(Actions.deleteQuizz.failure(false));
  }
}

function* getThemes() {
  try {
    yield put(Actions.getThemes.request(true));
    const request = yield call(Api.getThemes);
    if (request.status === 200) {
      yield put(Actions.getThemes.success(request.data));
    }
  } catch {
    yield put(Actions.getThemes.failure(false));
  }
}

export function* rootSagas() {
  yield takeLatest(Events.getQuizz, getQuizz);
  yield takeLatest(Events.getThemes, getThemes);
  yield takeLatest(Events.addQuizz, addQuizz);
  yield takeLatest(Events.deleteQuizz, deleteQuizz);
}
