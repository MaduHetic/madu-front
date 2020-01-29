import { combineReducers } from "redux";

import { User } from './user';

const createRootReducer = history =>
  combineReducers({
    user: User.reducer,
  });

export default createRootReducer;