import { ActionType, getType } from "typesafe-actions";
import produce from "immer";
import { Actions } from "./actions";

const initialState: QuizzState = {
  themes: [],
  questions: [],
  errors: [],
  isLoading: false,
};

export type QuizzAction =
  | ActionType<typeof Actions.getQuizz>
  | ActionType<typeof Actions.addQuizz>
  | ActionType<typeof Actions.getThemes>;

export const quizzReducer = (state = initialState, action: QuizzAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case getType(Actions.getQuizz.request): {
        draft.isLoading = action.payload;
        break;
      }
      case getType(Actions.getQuizz.success):
        draft.isLoading = false;
        draft.questions = action.payload;
        draft.errors = [];
        break;
      case getType(Actions.getQuizz.failure):
        draft.isLoading = action.payload;
        break;
      case getType(Actions.getThemes.request): {
        draft.isLoading = action.payload;
        break;
      }
      case getType(Actions.getThemes.success):
        draft.isLoading = false;
        draft.themes = action.payload;
        draft.errors = [];
        break;
      case getType(Actions.getThemes.failure):
        draft.isLoading = action.payload;
        break;
      case getType(Actions.addQuizz.request): {
        draft.isLoading = true;
        break;
      }
      case getType(Actions.addQuizz.success): {
        draft.isLoading = false;
        break;
      }
      case getType(Actions.addQuizz.failure): {
        draft.isLoading = true;
        break;
      }
      default:
        return state;
    }
  });
};
