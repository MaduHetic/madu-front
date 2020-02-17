import { all } from "redux-saga/effects";
import { User } from '../core/user';
import { Company } from '../core/company';

export default function* rootSaga() {
  yield all([User.sagas(), Company.sagas()]);
}