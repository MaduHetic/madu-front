import { useDispatch, useSelector } from "react-redux";
import { rootSagas } from "./sagas";
import { Events } from "./actions";
import { quizzReducer } from "./reducer";
import { isLoading, questions, themes } from "./selectors";

function useGetQuizz() {
  const dispatch = useDispatch();
  return (id) => {
    dispatch(Events.getQuizz(id));
  };
}

function useGetThemes() {
  const dispatch = useDispatch();
  return () => {
    dispatch(Events.getThemes());
  };
}

function useQuestions() {
  return useSelector(questions);
}

function useThemes() {
  return useSelector(themes);
}

function useIsLoading() {
  return useSelector(isLoading);
}

function useAddQuizz() {
  const dispatch = useDispatch();
  return (data) => {
    dispatch(Events.addQuizz(data));
  }
  
}

export const Quizz = {
  getQuizz: useGetQuizz,
  getThemes: useGetThemes,
  addQuizz: useAddQuizz,
  questions: useQuestions,
  themes: useThemes,
  isLoading: useIsLoading,
  sagas: rootSagas,
  reducer: quizzReducer,
};
