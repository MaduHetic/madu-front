import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events, Actions } from "./actions";
import { userReducer } from "./reducer";
import {
  isLoading,
  user,
  errors,
  loggedIn,
} from "./selectors";

function useSignOut() {
  const dispatch = useDispatch();
  return () => {
    localStorage.removeItem('user');
    dispatch(Actions.signOut());
  }
}

function useSignIn() {
  const dispatch = useDispatch();
  return (creds) => {
    dispatch(Actions.signIn.request(true));
    dispatch(Events.signIn(creds));
  };
}

function useGetCurrentUser() {
  const dispatch = useDispatch();
  return () => {
    dispatch(Actions.getCurrentUser.request(true));
    dispatch(Events.getCurrentUser());
  }
}

function useSignUp() {
  const dispatch = useDispatch();
  return () => dispatch(Events.signUp());
}

function useUser() {
  return useSelector(user);
}

function useError() {
  return useSelector(errors);
}

function useLoggedIn() {
  return useSelector(loggedIn);
}

function useIsLoading() {
  return useSelector(isLoading);
}


export const User = {
  signOut: useSignOut,
  signIn: useSignIn,
  signUp: useSignUp,
  user: useUser,
  errors: useError,
  loggedIn: useLoggedIn,
  isLoading: useIsLoading,
  getCurrentUser: useGetCurrentUser,
  sagas: rootSagas,
  reducer: userReducer
};