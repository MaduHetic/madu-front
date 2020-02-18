import { combineReducers } from "redux";

import { User } from './user';
import { Company } from './company'
import { Poi } from './poi'

const createRootReducer = history =>
  combineReducers({
    user: User.reducer,
    company: Company.reducer,
    poi: Poi.reducer,
  });

export default createRootReducer;