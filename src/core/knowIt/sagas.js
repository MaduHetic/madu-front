import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";
import { Actions, Events } from "./actions";

function* getKnowIt() {
  try {
    yield put(Actions.getKnowIt.request(true));
    const request = yield call(Api.getKnowIt);
    if (request.status === 200) {
      yield put(Actions.getKnowIt.success(request.data));
    }
  } catch {
    yield put(Actions.getKnowIt.failure(false));
  }
}

function* addKnowIt(action) {
  try {
    yield put(Actions.addKnowIt.request(true));
    const request = yield call(Api.addKnowIt, action.payload);
    if (request.status === 200) {
      yield put(Actions.addKnowIt.success(request.data));
    }
  } catch {
    yield put(Actions.addKnowIt.failure(false));
  }
}

export function* rootSagas() {
  yield takeLatest(Events.getKnowIt, getKnowIt);
  yield takeLatest(Events.addKnowIt, addKnowIt);
}
