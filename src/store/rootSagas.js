import { all } from "redux-saga/effects";
import { User } from '../core/user';
import { Company } from '../core/company';
import { Poi } from '../core/poi';
import { Tags } from '../core/tags';
import { GreenScoreTypes } from '../core/greenScoreTypes';
import { Stats } from '../core/statsDashboard';
import { Quizz } from '../core/quizz';
import { KnowIt } from '../core/knowIt';
import { Challenge } from '../core/challenge'

export default function* rootSaga() {
  yield all([
    User.sagas(),
    Company.sagas(),
    Poi.sagas(),
    Tags.sagas(),
    GreenScoreTypes.sagas(),
    Stats.sagas(),
    Quizz.sagas(),
    KnowIt.sagas(),
    Challenge.sagas(),
  ]);
}