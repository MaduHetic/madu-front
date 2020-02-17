import { combineReducers } from "redux";

import { User } from './user';
import { Company } from './company'

const createRootReducer = history =>
  combineReducers({
    user: User.reducer,
    company: Company.reducer,
  });

export default createRootReducer;