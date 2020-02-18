import { combineReducers } from "redux";

import { User } from './user';
import { Company } from './company';
import { Poi } from './poi';
import { Tags } from './tags';

const createRootReducer = history =>
  combineReducers({
    user: User.reducer,
    company: Company.reducer,
    poi: Poi.reducer,
    tags: Tags.reducer,
  });

export default createRootReducer;