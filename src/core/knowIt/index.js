import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events } from "./actions";
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

function useData() {
  return useSelector(data);
}

function useIsLoading() {
  return useSelector(isLoading);
}

export const KnowIt = {
  getKnowIt: useGetKnowIt,
  addKnowIt: useAddKnowIt,
  data: useData,
  isLoading: useIsLoading,
  sagas: rootSagas,
  reducer: knowItReducer,
};
