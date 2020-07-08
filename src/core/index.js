import { combineReducers } from "redux";

import { User } from './user';
import { Company } from './company';
import { Poi } from './poi';
import { Tags } from './tags';
import { GreenScoreTypes } from './greenScoreTypes';
import { Stats } from './statsDashboard';
import { Quizz } from './quizz';
import { KnowIt } from './knowIt';
import { Challenge } from './challenge';

const createRootReducer = history =>
  combineReducers({
    user: User.reducer,
    company: Company.reducer,
    poi: Poi.reducer,
    tags: Tags.reducer,
    greenScoreTypes: GreenScoreTypes.reducer,
    stats: Stats.reducer,
    quizz: Quizz.reducer,
    knowIt: KnowIt.reducer,
    challenge: Challenge.reducer,
  });

export default createRootReducer;