import { all } from "redux-saga/effects";
import { User } from '../core/user';
import { Company } from '../core/company';
import { Poi } from '../core/poi';

export default function* rootSaga() {
  yield all([User.sagas(), Company.sagas(), Poi.sagas()]);
}