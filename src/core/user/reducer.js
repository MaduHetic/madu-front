import produce from "immer";
import { Actions } from "./actions";


const initialState: UserState = {
  user: null,
  loggedIn: false,
  credentials: {},
  errors: [],
  isLoading: false,
};

export const userReducer = (
  state = initialState,
  action
) => {
  return produce(state, draft => {
    switch (Actions) {
      case Actions.signIn.request:
        draft.isLoading = action.payload;
        break;
      case Actions.signIn.success:
        draft.user = action.payload;
        draft.isLoading = false;
        draft.loggedIn = true;
        draft.errors = [];
        break;
      case Actions.signIn.failure:
        draft.isLoading = action.payload;
        break;
      case Actions.signUp.request:
        draft.isLoading = action.payload;
        break;
      case Actions.signUp.success:
        draft.isLoading = action.payload;
        break;
      case Actions.signUp.failure:
        draft.isLoading = action.payload;
        break;
      case Actions.signOut.request:
        draft.isLoading = action.payload;
        break;
      case Actions.signOut.success:
        draft.loggedIn = false;
        draft.isLoading = action.payload;
        break;
      case Actions.signOut.failure:
        draft.user = null;
        draft.loggedIn = false;
        draft.isLoading = action.payload;
        break;
      case Actions.setUserCreds:
        break;
      default:
        return state;
    }
  });
};