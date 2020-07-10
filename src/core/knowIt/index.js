import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events, Actions } from "./actions";
import { knowItReducer } from "./reducer";
import { isLoading, data } from "./selectors";

function useGetKnowIt() {
  const dispatch = useDispatch();
  return () => dispatch(Events.getKnowIt());
}

function useAddKnowIt() {
  const dispatch = useDispatch();
  return (data) => dispatch(Events.addKnowIt(data));
}

function useDeleteKnowIt() {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(Events.deleteKnowIt(id));
    dispatch(Actions.deleteKnowIt.request());
  }
}

function useData() {
  return useSelector(data);
}

function useIsLoading() {
  return useSelector(isLoading);
}

export const KnowIt = {
  getKnowIt: useGetKnowIt,
  addKnowIt: useAddKnowIt,
  deleteKnowIt: useDeleteKnowIt,
  data: useData,
  isLoading: useIsLoading,
  sagas: rootSagas,
  reducer: knowItReducer,
};
